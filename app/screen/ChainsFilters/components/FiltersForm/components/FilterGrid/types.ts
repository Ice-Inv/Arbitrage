import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

/**
 * Предоставляет информацию для компонента c вертикальной сеткой
 */
export type FilterGridProps = {
  /**
   * Элементы для сетки
  */
 children: ReactNode;
 /**
  * Подпись к группе элементов
  */
 label?: string;
 /**
  * Предоставляет возможность кастомных стилей
  */
 style?: Partial<StyleProp<ViewStyle>>;
}
