import { useTheme } from "@rneui/themed";
import { View } from "react-native";
import { ContainerProps } from "./types";

export function Container({
  children,
}: ContainerProps) {
  const { theme } = useTheme();

  return (
    <View style={{height: '100%', width: '100%', backgroundColor: theme.colors.bg1}}>
      {children}
    </View>
  )
}
