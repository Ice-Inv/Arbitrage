import { StyleProp, ViewStyle } from "react-native";
import { SwitchProps } from "../../../../../../common/Switch/types";

/**
 * Предоставляет информацию для компонента Switch с подписью
 */
export interface FilterSwitchProps extends SwitchProps {
  /**
   * Подпись к переключателю справа
   */
  label: string;
  style?: Partial<StyleProp<ViewStyle>>;
}
