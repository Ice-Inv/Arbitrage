import { StyleSheet } from "react-native";
import { PriceProps } from "./types";
import { MainGradient } from "../../../../../../../../../../../../common";
import { ProfitPoint } from "../../../ProfitPoint";

export function Price({
  price,
  label,
  isRow = false,
}: PriceProps) {
  return (
    <MainGradient
      style={{
        ...styles.root,
        borderRadius: isRow ? 4 : 18,
      }}
    >
      <ProfitPoint
        label={label}
        profit={price}
        isRow={isRow}
        isWhite
      />
    </MainGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
});
