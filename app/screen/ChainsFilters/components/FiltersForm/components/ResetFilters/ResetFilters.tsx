import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ResetFiltersProps } from "./types";
import { useTheme } from "@rneui/themed";

export function ResetFilters({
  handleResetFilters,
}: ResetFiltersProps) {
  const {
    theme: {
      colors: {
        blue1,
      }
    }
  } = useTheme();

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={handleResetFilters}>
        <Text style={{ ...styles.buttonLabel, color: blue1}}>
          Сбросить фильтры
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 15,
  },
  buttonLabel: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: "700",
  }
});
