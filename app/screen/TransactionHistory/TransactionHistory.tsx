import { Layout } from "../../common";
import { Header, LastDeal } from "../../components";
import { useTransactionHistory } from "./hooks/useTransactionHistory";
import { View } from "react-native";

export function TransactionHistory() {
  const {
    transactionHistory
  } = useTransactionHistory();

  return (
    <Layout>
      <Header title="История доходов" isNotCircle />
      {transactionHistory.map((transaction, index) => (
        <LastDeal
          key={index}
          label={transaction.label}
          value={transaction.value}
          dynamicValueFirst={transaction.dynamicValueFirst}
          dynamicValueSecond={transaction.dynamicValueSecond}
        />
      ))}
      <View style={{ marginBottom: 20 }}/>
    </Layout>
  );
}
