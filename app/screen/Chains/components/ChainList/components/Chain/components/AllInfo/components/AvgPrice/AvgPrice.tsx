import { View, Text, StyleSheet } from "react-native";
import { AvgPriceProps } from "./types";
import { Price } from "./components/Price";
import { useTheme } from "@rneui/themed";

export function AvgPrice({
  avgProfit,
}: AvgPriceProps) {
  const {
    theme: {
      colors: {
        element1,
      },
    },
  } = useTheme();

  return (
    <View style={styles.root}>
      <Text
        style={{
          ...styles.label,
          color: element1,
        }}
      >
        Средняя доходность на 3 точках
      </Text>

      <View style={styles.container}>
        <Price price={avgProfit.profit100} label="100$" isRow />
        <Price price={avgProfit.profit1000} label="1000$" isRow />
        <Price price={avgProfit.profit10000} label="10000$" isRow />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 4,
  },
  container: {
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});
