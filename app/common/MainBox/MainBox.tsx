import {useTheme} from "@rneui/themed";
import {View, StyleSheet} from "react-native";
import {MainBoxProps} from "./types";

export function MainBox({
   children,
   style,
}: MainBoxProps) {
  const {
    theme: {
      colors: {
        element4,
      }
    }
  } = useTheme();

  return (
    <View style={{ ...style, backgroundColor: element4, ...styles.root }}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
})
