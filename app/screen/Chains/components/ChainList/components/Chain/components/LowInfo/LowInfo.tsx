import { View, Text, StyleSheet } from "react-native";
import { LowInfoProps } from "./types";
import { useTheme } from "@rneui/themed";
import { ProfitPoint } from "../AllInfo/components/ProfitPoint";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function LowInfo({
  currencyList,
  platformList,
  profit,
}: LowInfoProps) {
  const {
    theme: {
      colors: {
        main1,
        element1,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, borderBottomColor: main1 }}>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <MaterialCommunityIcons
            name="currency-sign"
            size={20}
            color={element1}
          />

          {currencyList.map((currency, index) => (
            <Text
              key={index}
              style={{
                ...styles.label,
                color: element1,
              }}
            >
              {currency}
            </Text>
          ))}
        </View>

        <View style={styles.containerList}>
          <MaterialIcons
            name="currency-exchange"
            size={20}
            color={element1}
          />

          {platformList.map((platform, index) => (
            <Text
              key={index}
              style={{
                ...styles.label,
                color: element1,
              }}
            >
              {platform}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.profitContainer}>
        <ProfitPoint label="100$" profit={profit.profit100} />
        <ProfitPoint label="1000$" profit={profit.profit1000} />
        <ProfitPoint label="10000$" profit={profit.profit10000} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    rowGap: 6,
  },
  containerList: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
  },
  profitContainer: {
    alignItems: 'flex-end',
    rowGap: 4,
  },
});
