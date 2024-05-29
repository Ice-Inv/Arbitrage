import { useTheme } from "@rneui/themed";
import { View, StyleSheet } from "react-native";
import { MainBoxProps } from "./types";

export function MainBox({
   children,
   style,
}: MainBoxProps) {
  const {
    theme: {
      mode,
      colors: {
        element4,
        bg2,
      }
    }
  } = useTheme();

  return (
    <View style={{
      backgroundColor: mode === "light" ? element4 : bg2,
      ...styles.root,
      ...style,
    }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 15,
  },
})
