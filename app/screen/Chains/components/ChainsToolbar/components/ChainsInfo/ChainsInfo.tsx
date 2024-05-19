import { View, StyleSheet } from "react-native";
import { MainBox } from "../../../../../../common";
import { TotalFound } from "./components/TotalFound";
import { InfoScreen } from "./components/InfoScreen";
import { Sorting } from "./components/Sorting";

export function ChainsInfo() {
  return (
    <MainBox style={styles.root}>
      <TotalFound total={28} />
      <InfoScreen />
      <Sorting />
    </MainBox>
  );
}

const styles = StyleSheet.create({
  root: {
    marginTop: 0,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 0,
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 14,
  },
});
