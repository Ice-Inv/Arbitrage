import { View, StyleSheet } from "react-native";
import { StepsProps } from "./types";
import { useTheme } from "@rneui/themed";
import { State } from "../../../../../../../../../../common/State";
import { Cell } from "./components/Cell";

export function Steps({
  steps,
}: StepsProps) {
  const {
    theme: {
      colors: {
        main1,
      },
    },
  } = useTheme();

  return (
    <View style={{ ...styles.root, borderBottomColor: main1 }}>
      {steps.map((step) => (
        <View key={step.id} style={styles.row}>
          <Cell size={3} label={step.currencyStart} />
          <Cell size={5} label={step.platformStart} />
          <Cell size={1} isArrow style={{ paddingRight: 4 }} />
          <Cell size={3} label={step.currencyEnd} />
          <Cell size={5} label={step.platformEnd} />

          <View style={styles.cell4}>
            <State
              label={step.isOpen ? "Дост." : "Не дост."}
              isState={step.isOpen}
            />
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
  },
  cell4: {
    flex: 5,
    alignItems: 'center',
    flexDirection: 'row',
  }
});
