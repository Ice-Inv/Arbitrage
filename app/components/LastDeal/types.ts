/**
 * Предоставляет информацию о последних сделках
 */
export type LastDealProps = {
  /**
   * Результат сделки
   */
  value: number;
  /**
   * Общая сумма по всем сделкам
   */
  dynamicValueFirst: number;
  /**
   * Процент дохода к общей сумме от результата сделки
   */
  dynamicValueSecond: number;
}
