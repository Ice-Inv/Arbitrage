import { View, ScrollView } from "react-native";
import { LayoutProps } from "./types";
import { useTheme } from "@rneui/themed";

export function Layout({
  children,
  isScrollView = true,
}: LayoutProps) {
  const {
    theme: {
      colors: {
        bg1,
      },
    },
  } = useTheme();

  return (
    <View style={{
      height: '100%',
      width: '100%',
      backgroundColor: bg1,
      paddingTop: 64,
    }}>
      {isScrollView
        ? <ScrollView>{children}</ScrollView>
        : children
      }
    </View>
  )
}