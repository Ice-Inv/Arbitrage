import { Text, View, StyleSheet } from "react-native";
import { TotalFoundProps } from "./types";
import { FontAwesome6 } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function TotalFound({
  total,
}: TotalFoundProps) {
  const {
    theme: {
      colors: {
        green1,
      }
    }
  } = useTheme();

  return (
    <View style={styles.root}>
      <FontAwesome6 name="chart-line" size={20} color={green1} />
      <Text style={styles.total}>{total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: "700",
  }
});
