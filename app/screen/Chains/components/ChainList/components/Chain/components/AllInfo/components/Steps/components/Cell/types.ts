import { StyleProp, ViewStyle } from "react-native";

export type CellProps = {
  size: number;
  label?: string;
  style?: Partial<StyleProp<ViewStyle>>;
  isArrow?: boolean;
}
