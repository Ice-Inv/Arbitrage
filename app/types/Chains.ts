/**
 * Перечень статусов, которые могут быть у цепочки.
 */
export enum StatusChains {
  /**
   * Цепочка активна.
   */
  ACTIVE = 'ACTIVE',
}

/**
 * Прибыльность цепочки на различных значениях.
 */
export type ProfitChains = {
  /**
   * Прибыльность цепочки в % на 100$.
   */
  profit100: number;
  /**
   * Прибыльность цепочки в % на 1000$.
   */
  profit1000: number;
  /**
   * Прибыльность цепочки в % на 10000$.
   */
  profit10000: number;
}

/**
 * Подробная информация о шагах цепочки.
 */
export type StepsChain = {
  /**
   * Валюта начала.
   */
  currencyStart: string;
  /**
   * Валюта конца.
   */
  currencyEnd: string;
  /**
   * Платформа начала.
   */
  platformStart: string;
  /**
   * Платформа конца.
   */
  platformEnd: string;
  /**
   * Ссылка на биржу на данный шаг.
   */
  link: string
}

/**
 * Истории доходности цепочки.
 */
export type ChartChain = {
  /**
   * Значение доходности.
   */
  value: number;
  /**
   * Время, когда произошла эта доходность.
   */
  date: Date;
}

/**
 * Данные которые могут быть у одной цепочки.
 */
export type ChainsData = {
  /**
   * Уникальный идентификатор цепочки.
   */
  id: string;
  /**
   * Длина цепочки.
   */
  length: number;
  /**
   * Время, когда цепочка была найдена.
   */
  residenceTime: Date;
  /**
   * Статус работы цепочки.
   */
  status: StatusChains;
  /**
   * Данные о прибыльности цепочек на нескольких точек прибыльности.
   */
  profit: ProfitChains;
  /**
   * Список валют в цепочке.
   */
  currencyList: string[];
  /**
   * Список платформ в цепочке.
   */
  platformList: string[];
  /**
   * Подробная информация о шагах цепочки.
   */
  steps: StepsChain[];
  /**
   * Информация об истории доходности цепочки.
   */
  chart: ChartChain[];
}

/**
 * Уникальный идентификатор цепочки.
 */
export type ProfitChainPoint = {
  /**
   * Минимальное значение точки прибыльности.
   */
  minValue: string;
  /**
   * Максимальное значение точки прибыльности.
   */
  maxValue: string;
}

/**
 * Предоставляет информацию по точкам прибыльности для фильтров.
 */
export type ProfitChainsFilter = {
  /**
   * Максимальная и минимальная прибыльности при 100$.
   */
  profit100: ProfitChainPoint;
  /**
   * Максимальная и минимальная прибыльности при 1000$.
   */
  profit1000: ProfitChainPoint;
  /**
   * Максимальная и минимальная прибыльности при 10000$.
   */
  profit10000: ProfitChainPoint;
}

/**
 * Предоставляет информацию по списку доступных фильтров.
 */
export type ChainsFilters = {
  /**
   * Уникальный идентификатор цепочки.
   */
  id: string;
  /**
   * Строгий фильтр по валютам.
   */
  isAllCurrencyList: boolean;
  /**
   * Строгий фильтр по платформам.
   */
  isAllPlatformList: boolean;
  /**
   * Список валют в фильтре.
   */
  currencyList: string[];
  /**
   * Список платформ в фильтре.
   */
  platformList: string[];
  /**
   * Максимальная длина цепочки.
   */
  maxLengthChains: string;
  /**
   * Прибыльность цепочки на различных точках.
   */
  profit: ProfitChainsFilter;
}

/**
 * Представляет контекст для взаимодействия с цепочками и методы
 * для управления цепочками.
 */
export type ChainsContextProps = {
  /**
   * Представляет список всех доступных цепочек.
   */
  chains: ChainsData[];
  /**
   * Предоставляет информацию о текущих настройках фильтров
   */
  filterSettings: ChainsFilters;
  /**
   * Предоставляет информацию о различных ошибках
   */
  error: string | null;
  /**
   * Предоставляет информацию о состоянии загрузки
   */
  isLoading: boolean;
  /**
   * Функция для установления настроек фильтрации и фильтрации цепочек
   * @param settings - настройки по которым будет производится фильтрация цепочек
   */
  handleFilterChains: (settings: ChainsFilters) => void;
  /**
   * Функция для сброса настроек фильтрации
   */
  handleResetFilterChains: () => void;
  /**
   * Функция для расчета прибыльности цепочки по заданному значению
   * @param profit - сумма, при которой юзер хочет узнать доход цепочки
   * @param id - уникальный идентификатор цепочки
   * @returns Возвращает сумму дохода цепочки
   */
  handleGetProfitChain: (profit: string, id: string) => string;
}
