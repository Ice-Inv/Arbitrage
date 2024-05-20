import { View, StyleSheet } from "react-native";
import { AllInfoProps } from "./type";
import { Profit } from "../Profit";
import { Steps } from "./components/Steps";

export function AllInfo({
  profit,
  steps,
  avgProfit,
}: AllInfoProps) {
  return (
    <View>
      <Profit profit={profit} />
      <Steps steps={steps} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    
  },
});
