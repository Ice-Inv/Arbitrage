/**
 * Предоставляет информацию о ликвидных курсах пришедших с сервера
 */
export type LiquidityRate = {
  cost: number;
  volume: number;
}

/**
 * Предоставляет информацию о шаге курсов пришедших с сервера
 */
export type Course = {
  id: number;
  platform_from: string;
  platform_to: string;
  currency_from: string;
  currency_to: string;
  best_price: number;
  liquidity_rate: LiquidityRate[] | null;
  is_open: true;
  last_update: Date | null;
}

/**
 * Предоставляет информацию о данных цепочек пришедших с сервера
 */
export type ChainsResponse = {
  id: number;
  rate_100_percent: number | null;
  rate_1000_percent: number | null;
  rate_10000_percent: number | null;
  avg_rate100_percent: number | null;
  avg_rate1000_percent: number | null;
  avg_rate10000_percent: number | null;
  courses: Course[];
  deal_cnt: number;
  last_update: Date;
  creation_time: Date;
}

export type NecessaryInformation = {
  currencyList: string[];
  platformList: string[];
  isOpen: boolean;
}

/**
 * Прибыльность цепочки на различных значениях.
 */
export type ProfitChains = {
  /**
   * Прибыльность цепочки в % на 100$.
   */
  profit100: number | null;
  /**
   * Прибыльность цепочки в % на 1000$.
   */
  profit1000: number | null;
  /**
   * Прибыльность цепочки в % на 10000$.
   */
  profit10000: number | null;
}

/**
 * Подробная информация о шагах цепочки.
 */
export type StepsChain = {
  /**
   * Уникальны идентификатор шага цепочки
   */
  id: number;
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
  link: string;
  /**
   * Доступен ли данный шаг для обмена
   */
  isOpen: boolean;
  /**
   * Лучший курс обмена на данный момент
   */
  bestPrice: number;
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
   * Данные о прибыльности цепочек на нескольких точек прибыльности.
   */
  profit: ProfitChains;
  /**
   * Средняя доходность прибыльности цепочки.
   */
  avgProfit: ProfitChains;
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
   * Доступен ли вся цепочка для обмена
   */
  isOpen: boolean;
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
 * Предоставляет информацию по списку опций
 */
export type Options = {
  /**
   * Подпись опции
   */
  label: string;
  /**
   * Значение опции
   */
  value: string;
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
   * Предоставляет весь список валют
   */
  currencyAllList: Options[];
  /**
   * Предоставляет весь список платформ
   */
  platformAllList: Options[];
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
