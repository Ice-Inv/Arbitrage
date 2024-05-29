import { View, Text, StyleSheet } from "react-native";
import { ProfitPointProps } from "./types";
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function ProfitPoint({
  profit,
  label,
  isWhite,
  isRow = false,
}: ProfitPointProps) {
  const {
    theme: {
      colors: {
        element1,
        element2,
      },
    },
  } = useTheme();

  return (
    <View
      style={{
        ...styles.profitContainer,
        flexDirection: isRow ? 'column' : 'row',
        paddingHorizontal: isRow? 20 : 0,
      }}
    >
      {!isRow && (
        <Text
          style={{
            ...styles.labelProfit,
            color: isWhite ? element2 : element1,
          }}
        >
          {label}
        </Text>
      )}
      
      {!isRow && (
        <AntDesign
          name="arrowright"
          size={14}
          color={isWhite ? element2 : element1}
        />
      )}

      <Text
        style={{
          ...styles.labelProfit,
          color: isWhite ? element2 : element1,
        }}
      >
        {profit ? `${profit}%` : 'Н/Д'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profitContainer: {
    alignItems: 'center',
  },
  labelProfit: {
    fontSize: 14,
    fontWeight: "500",
  },
});
