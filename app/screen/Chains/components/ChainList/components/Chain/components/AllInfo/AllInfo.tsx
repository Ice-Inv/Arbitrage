import { View } from "react-native";
import { AllInfoProps } from "./type";
import { Profit } from "../Profit";
import { Steps } from "./components/Steps";
import { AvgPrice } from "./components/AvgPrice";

export function AllInfo({
  profit,
  steps,
  avgProfit,
}: AllInfoProps) {
  return (
    <View>
      <Profit profit={profit} />
      <Steps steps={steps} />
      <AvgPrice avgProfit={avgProfit} /> 
    </View>
  );
}
