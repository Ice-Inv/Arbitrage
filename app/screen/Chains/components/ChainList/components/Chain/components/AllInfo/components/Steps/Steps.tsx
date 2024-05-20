import { View, Text, StyleSheet } from "react-native";
import { StepsProps } from "./types";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from "@rneui/themed";

export function Steps({
  steps,
}: StepsProps) {
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
      {steps.map((step) => (
        <View key={step.id} style={styles.row}>
          <View style={styles.cell2}>
            <MaterialCommunityIcons
              name="currency-sign"
              size={20}
              color={element1}
            />
            <Text style={styles.stepLabel}>
              {step.currencyStart}
            </Text>
          </View>

          <View style={styles.cell3}>
            <MaterialIcons
              name="currency-exchange"
              size={20}
              color={element1}
            />
            <Text style={styles.stepLabel}>
              {step.platformStart}
            </Text>
          </View>

          <View style={styles.cell}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="black"
            />
          </View>

          <View style={styles.cell2}>
            <MaterialCommunityIcons
              name="currency-sign"
              size={20}
              color={element1}
            />
            <Text style={styles.stepLabel}>
              {step.currencyEnd}
            </Text>
          </View>

          <View style={styles.cell3}>
            <MaterialIcons
              name="currency-exchange"
              size={20}
              color={element1}
            />
            <Text style={styles.stepLabel}>
              {step.platformEnd}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    gap: 6,
  },
  cell: {
    flex: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell2: {
    flex: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 4,
  },
  cell3: {
    flex: 3,
    borderColor: '#ccc',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 4,
  },
  stepLabel: {
    fontSize: 14,
    fontWeight: "500",
  }
});
