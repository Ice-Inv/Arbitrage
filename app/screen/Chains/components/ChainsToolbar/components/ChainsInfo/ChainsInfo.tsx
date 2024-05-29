import { StyleSheet } from "react-native";
import { InfoScreen, MainBox } from "../../../../../../common";
import { TotalFound } from "./components/TotalFound";
import { Sorting } from "./components/Sorting";
import { useChains } from "../../../../../../hooks/useChains";

export function ChainsInfo() {
  const { chains } = useChains();

  return (
    <MainBox style={styles.root}>
      <TotalFound total={chains.length} />
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
