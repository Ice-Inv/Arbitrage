/**
 * Предоставляет информацию для графика доходности пользователя
 */
export type ChartProfitUser = {
  /**
   * Список значений доходности
   */
  profits: number[];
  /**
   * Список дат добавления точки
   */
  dates: Date[];
}

/**
 * предоставляет информацию по последней доходности
 */
export type LastProfitData = {
  /**
   * Общая прибыль
   */
  allProfit: number,
  /**
   * Последняя прибыль
   */
  profit: number,
  /**
   * Процент от общей прибыли
   */
  percent: number,
}

/**
 * Предоставляет информацию для утилитарной функции для расчета данных о
 * общей прибыльности и данных графика
 */
export type ChartDataAndAllProfit = {
  /**
   * Информация о общей доходности
   */
  allProfit: number;
  /**
   * Информация о данных для графика
   */
  chartData: ChartProfitUser;
}

/**
 * Предоставляет информацию о данных для отправки точки доходности
 */
export type IncomeParams = {
  /**
   * Уникальный идентификатор цепочки
   */
  loopId: number;
  /**
   * Входное значение цепочки
   */
  inputValue: number;
  /**
   * Выходное значение цепочки
   */
  outputValue: number;
}

/**
 * Предоставляет информацию о точке доходности пользователя
 */
export type IncomeData = {
  /**
   * Уникальный идентификатор цепочки
   */
  id: number;
  /**
   * Номер клиента
   */
  client: number;
  /**
   * Номер цепочки
   */
  loop: number;
  /**
   * Входное значение цепочки
   */
  inputValue: number;
  /**
   * Выходное значение цепочки
   */
  outputValue: number;
  /**
   * Время создания цепочки
   */
  creationTime: Date;
}

export type IncomeContextProps = {
  /**
   * Содержит весь список точек доходности
   */
  incomePoints: IncomeData[];
  /**
   * Общий доход по всем точкам
   */
  allProfit: number;
  /**
   * Данные о последнем доходе
   */
  lastProfit: LastProfitData;
  /**
   * Предоставляет информацию для графика о доходности пользователя
   */
  chartProfitData: ChartProfitUser;
  /**
   * Содержит информацию об ошибке
   */
  error: string | null,
  /**
   * Содержит информацию об состоянии загрузки
   */
  isLoading: boolean,
  /**
   * Функция для добавления новой точки доходности
   * @param params - параметры новой точки доходности
   */
  handleSetPoint: (params: IncomeParams) => void;
  /**
   * Функция для получения списка всех точек доходности
   */
  handleGetAllPoint: () => void;
}