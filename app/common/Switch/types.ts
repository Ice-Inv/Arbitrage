/**
 * Предоставляет информацию о необходимых пропсах для компонента Switch
 */
export type SwitchProps = {
  /**
   * Включен / Выключен
   */
  isEnabled: boolean;
  /**
   * Функция для смены состояния isEnable или других действий
   */
  handleIsEnabled: () => void;
  /**
   * Заблокирован переключатель или нет
   */
  isDisabled?: boolean;
}
