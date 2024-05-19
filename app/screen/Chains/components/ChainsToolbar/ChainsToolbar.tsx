import { StyleSheet } from "react-native";
import { Padding } from "../../../../common";
import { RedirectFilters } from "./components/RedirectFilters";
import { ChainsInfo } from "./components/ChainsInfo";

export function ChainsToolbar() {
  return (
    <Padding style={styles.root}>
      <ChainsInfo />
      <RedirectFilters />
    </Padding>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
