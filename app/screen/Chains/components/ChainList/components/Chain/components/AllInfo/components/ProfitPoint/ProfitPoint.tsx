import { View, Text, StyleSheet } from "react-native";
import { ProfitPointProps } from "./types";
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function ProfitPoint({
  profit,
  label,
}: ProfitPointProps) {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  return (
    <View style={styles.profitContainer}>
      <Text style={styles.labelProfit}>{label}</Text>
      <AntDesign
        name="arrowright"
        size={14}
        color={element1}
      />
      <Text style={styles.labelProfit}>
        {profit ? `${profit}%` : 'Н/Д'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelProfit: {
    fontSize: 14,
    fontWeight: "500",
  },
});
