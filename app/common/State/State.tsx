import { View, StyleSheet } from "react-native";
import { StateProps } from "./types";
import { useTheme } from "@rneui/themed";

export function State({
  label,
  isState,
}: StateProps) {
  const {
    theme: {
      colors: {
        green1,
        red1,
        green3,
        red3,
      },
    },
  } = useTheme();

  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    
  },
});
