export type ForecastInfoBoxProps = {
  /**
   * Возможный доход
   */
  forecastValue: number;
  /**
   * Основная валюта
   */
  mainCurrency: string;
  /**
   * Общая суммма в основной валюте
   */
  mainCurrencyValue: number;
  /**
   * Общая сумма по всем сделкам
   */
  dynamicValueFirst: number;
  /**
   * Процент дохода к общей сумме от результата сделки
   */
  dynamicValueSecond: number;
}
