import { ReactNode } from "react"
import { StyleProp, ViewStyle } from "react-native";

export type PaddingProps = {
  children: ReactNode;
  style?: Partial<StyleProp<ViewStyle>>;
}