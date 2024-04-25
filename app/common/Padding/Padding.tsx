import { View } from "react-native";
import { PaddingProps } from "./types";

export function Padding({
  children,
  style = {},
} : PaddingProps) {
  return (
    <View style={{ paddingHorizontal: 16, ...style}}>
      {children}
    </View>
  )
}