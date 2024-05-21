import { View, Text, StyleSheet } from "react-native";
import { CellProps } from "./types";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function Cell({
  size,
  label = '',
  style = {},
  isArrow = false,
}: CellProps) {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, flex: size, ...style }}>
      {isArrow ? (
        <MaterialIcons
          name="keyboard-arrow-right"
          size={20}
          color="black"
        />
      ) : (
        <Text style={{ ...styles.stepLabel, color: element1 }}>
          {label}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
});
