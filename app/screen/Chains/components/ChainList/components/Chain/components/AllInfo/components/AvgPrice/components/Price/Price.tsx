import { StyleSheet } from "react-native";
import { PriceProps } from "./types";
import { MainGradient } from "../../../../../../../../../../../../common";
import { ProfitPoint } from "../../../ProfitPoint";

export function Price({
  price,
  label
}: PriceProps) {
  return (
    <MainGradient style={styles.root}>
      <ProfitPoint label={label} profit={price} isWhite />
    </MainGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 18,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});
