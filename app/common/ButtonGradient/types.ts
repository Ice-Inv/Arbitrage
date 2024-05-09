import { GestureResponderEvent } from "react-native";

export type ButtonGradientProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
}
