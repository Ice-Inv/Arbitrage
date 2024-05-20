import { StyleProp, ViewStyle } from "react-native"

export type ButtonProps = {
  onPress: () => void;
  title: string;
  colors?: [string, string];
  style?: Partial<StyleProp<ViewStyle>>;
  styleText?: Partial<StyleProp<ViewStyle>>;
}