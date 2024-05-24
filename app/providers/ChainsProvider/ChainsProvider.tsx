import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { ChainsContextProps, ChainsData, ChainsFilters, Options } from "../../types";
import { ChainsProviderProps } from "./types";
import { DEFAULT_SETTINGS_FILTERS } from "./constants";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES_WEB_SOCKET } from "./routes";
import { CHAINS_ERROR } from "../../error/Chains";
import { getToken } from "../../utils";
import { ACCESS_TOKEN } from "../../constants";
import { getDataChainsFromResponse, getOptions } from "./utils";
import { chainsService } from "../../services/Chains";

export const ChainsContext = createContext<ChainsContextProps>({} as ChainsContextProps);

export function ChainsProvider({
  children,
}: ChainsProviderProps) {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  const [chains, setChains] = useState<ChainsData[]>([]);
  const [filteredChains, setFilteredChains] = useState<ChainsData[]>([]);
  const [filterSettings, setFilterSettings] = useState<ChainsFilters>(DEFAULT_SETTINGS_FILTERS);

  const [currencyList, setCurrencyList] = useState<Options[]>([]);
  const [platformList, setPlatformList] = useState<Options[]>([]);

  const [accessToken, setAccessToken] = useState<string | null>('');

  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<number | null>(null);
  const { user } = useAuth();

  /**
   * Функция для получения списка валют
   */
  async function handleCurrencyList() {
    setIsLoading(true);
    setError(null);

    try {
      const currencyList = await chainsService.getCurrencyList();
      
      setCurrencyList(getOptions(currencyList))
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * Функция для получения списка платформ
   */
  async function handlePlatformList() {
    setIsLoading(true);
    setError(null);

    try {
      const platformList = await chainsService.getPlatformList();
      
      setPlatformList(getOptions(platformList))
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  /**
   * Функция для фильтрации цепочек.
   * @param filters Объект с настройками для фильтрации
   */
  const filterChains = ({
    id,
    isAllCurrencyList,
    isAllPlatformList,
    currencyList,
    platformList,
    maxLengthChains,
    profit,
  }: ChainsFilters, newChains: ChainsData[]) => {
    setFilteredChains(newChains.filter((chain) => {
      // Проверка цепочки на id
      if (id && chain.id !== id) return false;

      // Проверка на длину цепочки
      if (maxLengthChains && chain.length > Number(maxLengthChains)) return false;

      // Проверка на валюты
      if (isAllCurrencyList && currencyList.length && !chain.currencyList.every((cur) => currencyList.includes(cur))) return false;
      if (currencyList.length && !chain.currencyList.some((cur) => currencyList.includes(cur))) return false;

      // Проверка на платформы
      if (isAllPlatformList && platformList.length && !chain.platformList.every((cur) => platformList.includes(cur))) return false;
      if (platformList.length && !chain.platformList.some((cur) => platformList.includes(cur))) return false;

      // Проверка прибыльности на 100
      if (profit.profit100.minValue && (!chain.profit.profit100 || Number(profit.profit100.minValue) > chain.profit.profit100)) return false;
      if (profit.profit100.maxValue && (!chain.profit.profit100 || Number(profit.profit100.maxValue) < chain.profit.profit100)) return false;

      // Проверка прибыльности на 1000
      if (profit.profit1000.minValue && (!chain.profit.profit1000 || Number(profit.profit1000.minValue) > chain.profit.profit1000)) return false;
      if (profit.profit1000.maxValue && (!chain.profit.profit1000 || Number(profit.profit1000.maxValue) < chain.profit.profit1000)) return false;

      // Проверка прибыльности на 10000
      if (profit.profit10000.minValue && (!chain.profit.profit10000 || Number(profit.profit10000.minValue) > chain.profit.profit10000)) return false;
      if (profit.profit10000.maxValue && (!chain.profit.profit10000 || Number(profit.profit10000.maxValue) < chain.profit.profit10000)) return false;

      return true;
    }));
  };

  /**
   * Функция для обработки событий в WebSocket
   */
  const connectWebSocket = () => {
    // Убедитесь, что нет активного соединения перед созданием нового
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      return;
    }

    // Закрываем старое соединение, если оно существует
    if (ws.current) {
      ws.current.close();
    }

    ws.current = new WebSocket(`${ROUTES_WEB_SOCKET}?token=${accessToken}`);

    ws.current.onopen = () => {
      console.log('WebSocket соединение открыто');
    };

    ws.current.onmessage = (event: MessageEvent) => {
      async function getValue() {
        const chains = await getDataChainsFromResponse(JSON.parse(event.data));
  
        await filterChains(filterSettings, chains);
        await setChains(chains);
      }
      getValue();
    };

    ws.current.onerror = (error: Event) => {
      setError(CHAINS_ERROR.ON_ERROR);
    };

    ws.current.onclose = (event: CloseEvent) => {
      console.log('WebSocket соединение закрыто');
      setError(CHAINS_ERROR.ON_CLOSE);
      if (!event.wasClean) {
        reconnectTimeout.current = setTimeout(connectWebSocket, 10000);
      }
    };
  };

  /**
   * Устанавливает WebSocket соединение и обрабатывает его жизненный цикл.
   * Данное соединение получает список всех цепочек и сразу фильтрует их по заданным настройкам в `filterSettings`.
   * 
   * Эффект запускается при изменении состояния `user`, что позволяет контролировать
   * когда пользователь авторизован. При получении объекта `user`, устанавливается соединение с сервером,
   * обрабатываются события открытия, сообщений, ошибок и закрытия соединения.
   * 
   * При закрытии соединения, автоматически планируется повторное подключение через 10 секунд,
   * если соединение не было закрыто явно.
   * 
   * При размонтировании компонента или явном закрытии соединения происходит очистка таймера и закрытие WebSocket.
   * 
   * @dependency {User | null} user - состояние управляющие запросом на подключение/отключение WebSocket.
   */
  useEffect(() => {
    if (!user || !accessToken) return;

    connectWebSocket();

    return () => {
      if (ws.current) ws.current.close();
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
    };
  }, [user, accessToken]);

  /**
   * Функция устанавливающая настройки поиска
   * @param settings Настройки фильтрации цепочек
   */
  async function handleFilterChains(settings: ChainsFilters) {
    await setFilterSettings(settings);
    await filterChains(settings, chains);
  }

  /**
   * Функция сбрасывающая все фильтры
   */
  async function handleResetFilterChains() {
    await setFilterSettings(DEFAULT_SETTINGS_FILTERS);
    await setFilteredChains(chains);
  }

  /**
   * Функция для расчета прибыльности цепочки по заданному значению
   * @param profit - сумма, при которой юзер хочет узнать доход цепочки
   * @param id - уникальный идентификатор цепочки
   * @returns Возвращает сумму дохода цепочки
   */
  function handleGetProfitChain(profit: string, id: string) {
    return '';
  }

  async function getTokens() {
    const token = await getToken(ACCESS_TOKEN);

    setAccessToken(token);
  }

  useEffect(() => {
    if (!user) {
      if (ws.current) ws.current.close();
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);

      setCurrencyList([]);
      setPlatformList([]);
      return;
    }
    getTokens();
    
    Promise.all([
      handleCurrencyList(),
      handlePlatformList(),
    ]);
  }, [user]);

  useEffect(() => {
    getTokens();
    setIsLoadingInitial(false);
  }, []);

  const value = useMemo(() => ({
    chains: filteredChains,
    currencyAllList: currencyList,
    platformAllList: platformList,
    filterSettings,
    error,
    isLoading,
    handleFilterChains,
    handleResetFilterChains,
    handleGetProfitChain,
  }), [isLoading, filteredChains, filterSettings, currencyList, platformList]);

  return (
    <ChainsContext.Provider value={value}>
     {!isLoadingInitial && children}
    </ChainsContext.Provider>
  )
}