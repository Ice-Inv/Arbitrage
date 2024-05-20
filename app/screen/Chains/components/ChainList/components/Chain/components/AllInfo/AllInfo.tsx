import { View, StyleSheet } from "react-native";
import { AllInfoProps } from "./type";
import { Profit } from "../Profit";

export function AllInfo({
  profit,
  steps,
  avgProfit,
}: AllInfoProps) {
  return (
    <View>
      <Profit profit={profit} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    
  },
});
