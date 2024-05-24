import { Layout } from "../../common";
import { Header, LastDeal } from "../../components";
import { formattedFullYear } from "../../utils";
import { useTransactionHistory } from "./hooks/useTransactionHistory";
import { View } from "react-native";

export function TransactionHistory() {
  const {
    incomePoints,
    allProfit,
    isLoading,
    error,
  } = useTransactionHistory();

  return (
    <Layout>
      <Header title="История доходов" isNotCircle />
      {incomePoints.map((point) => (
        <LastDeal
          key={point.id}
          label={`Сделка за ${formattedFullYear(point.creationTime)}`}
          value={point.outputValue - point.inputValue}
          dynamicValueFirst={allProfit}
          dynamicValueSecond={Number(((point.outputValue - point.inputValue) * 100 / allProfit).toFixed(2))}
        />
      ))}
      <View style={{ marginBottom: 20 }}/>
    </Layout>
  );
}
