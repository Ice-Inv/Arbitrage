import { StyleSheet } from "react-native";
import { PriceProps } from "./types";
import { MainGradient } from "../../../../../../../../../../../../common";
import { ProfitPoint } from "../../../ProfitPoint";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const widthPrice = (width - 32 - 24 - 16) / 3;

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
    width: widthPrice,
    paddingVertical: 2,
  },
});
