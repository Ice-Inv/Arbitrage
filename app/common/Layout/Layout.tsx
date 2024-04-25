import { View, ScrollView } from "react-native";
import { LayoutProps } from "./types";

export function Layout({
  children,
  isScrollView = true,
}: LayoutProps) {

  return (
    <View style={{
      height: '100%',
      width: '100%',
      backgroundColor: '#fff',
      paddingTop: 64,
    }}>
      {isScrollView
        ? <ScrollView>{children}</ScrollView>
        : children
      }
    </View>
  )
}