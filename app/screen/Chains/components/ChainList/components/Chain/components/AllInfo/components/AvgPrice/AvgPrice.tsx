import { View, Text, StyleSheet } from "react-native";
import { AvgPriceProps } from "./types";
import { Price } from "./components/Price";

export function AvgPrice({
  avgProfit,
}: AvgPriceProps) {
  return (
    <View style={styles.root}>
      <Text style={styles.label}>
        Средняя доходность
      </Text>

      <View style={styles.container}>
        <Price price={avgProfit.profit100} label="100$" />
        <Price price={avgProfit.profit1000} label="1000$" />
        <Price price={avgProfit.profit10000} label="10000$" />
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
