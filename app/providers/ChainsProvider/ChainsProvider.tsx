import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChainsContextProps, ChainsData, ChainsFilters } from "../../types";
import { ChainsProviderProps } from "./types";
import { DEFAULT_SETTINGS_FILTERS } from "./constants";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES_WEB_SOCKET } from "./routes";
import { CHAINS_ERROR } from "../../error/Chains";

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

  const ws = useRef<WebSocket | null>(null);
  const reconnectTimeout = useRef<number | null>(null);
  const { user } = useAuth();

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
  }: ChainsFilters, newChains?: ChainsData[]) => {
    const currentChains = newChains ? newChains : chains;

    setFilteredChains(currentChains.filter((chain) => {
      // Проверка цепочки на id
      if (id && chain.id !== id) return;

      // Проверка на длину цепочки
      if (maxLengthChains && chain.length > Number(maxLengthChains)) return;

      // Проверка на валюты
      if (isAllCurrencyList && currencyList.length && !chain.currencyList.every((cur) => currencyList.includes(cur))) return;
      if (currencyList.length && !chain.currencyList.some((cur) => currencyList.includes(cur))) return;

      // Проверка на платформы
      if (isAllPlatformList && platformList.length && !chain.platformList.every((cur) => platformList.includes(cur))) return;
      if (platformList.length && !chain.platformList.some((cur) => platformList.includes(cur))) return;

      // Проверка прибыльности на 100
      if (profit.profit100.minValue && Number(profit.profit100.minValue) > chain.profit.profit100) return;
      if (profit.profit100.maxValue && Number(profit.profit100.maxValue) < chain.profit.profit100) return;

      // Проверка прибыльности на 1000
      if (profit.profit1000.minValue && Number(profit.profit1000.minValue) > chain.profit.profit100) return;
      if (profit.profit1000.maxValue && Number(profit.profit1000.maxValue) < chain.profit.profit100) return;

      // Проверка прибыльности на 10000
      if (profit.profit10000.minValue && Number(profit.profit10000.minValue) > chain.profit.profit100) return;
      if (profit.profit10000.maxValue && Number(profit.profit10000.maxValue) < chain.profit.profit100) return;

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

    // todo Временно скрыто
    // Закрываем старое соединение, если оно существует
    // if (ws.current) {
    //   ws.current.close();
    // }

    // ws.current = new WebSocket(ROUTES_WEB_SOCKET);

    // ws.current.onopen = () => {
    //   console.log('WebSocket соединение открыто');
    // };

    // ws.current.onmessage = (event: MessageEvent) => {
    //   setChains(event.data);
    //   filterChains(filterSettings, event.data);
    // };

    // ws.current.onerror = (error: Event) => {
    //   setError(CHAINS_ERROR.ON_ERROR);
    // };

    // ws.current.onclose = (event: CloseEvent) => {
    //   setError(CHAINS_ERROR.ON_CLOSE);
    //   if (!event.wasClean) {
    //     reconnectTimeout.current = setTimeout(connectWebSocket, 10000);
    //   }
    // };
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
    if (!user) return;

    connectWebSocket();

    return () => {
      if (ws.current) ws.current.close();
      if (reconnectTimeout.current) clearTimeout(reconnectTimeout.current);
    };
  }, [user]);

  /**
   * Функция устанавливающая настройки поиска
   * @param settings Настройки фильтрации цепочек
   */
  function handleFilterChains(settings: ChainsFilters) {
    setFilterSettings(settings);
    filterChains(settings, chains);
  }

  /**
   * Функция сбрасывающая все фильтры
   */
  function handleResetFilterChains() {
    setFilterSettings(DEFAULT_SETTINGS_FILTERS);
    setFilteredChains(chains);
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

  useEffect(() => {
    setIsLoadingInitial(false);
  }, []);

  const value = useMemo(() => ({
    chains: filteredChains,
    filterSettings,
    error,
    isLoading,
    handleFilterChains,
    handleResetFilterChains,
    handleGetProfitChain,
  }), []);

  return (
    <ChainsContext.Provider value={value}>
     {!isLoadingInitial && children}
    </ChainsContext.Provider>
  )
}