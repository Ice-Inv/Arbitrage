import { View, StyleSheet } from "react-native";
import { ProfitProps } from "./types";
import { useTheme } from "@rneui/themed";
import { ProfitPoint } from "../AllInfo/components/ProfitPoint";

export function Profit({
  profit,
}: ProfitProps) {
  const {
    theme: {
      colors: {
        main1,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, borderBottomColor: main1 }}>
      <ProfitPoint label="100$" profit={profit.profit100} />
      <ProfitPoint label="1000$" profit={profit.profit1000} />
      <ProfitPoint label="10000$" profit={profit.profit10000} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 1,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    lineHeight: 35,
  },
});
