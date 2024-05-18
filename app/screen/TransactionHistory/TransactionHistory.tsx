import { Text } from "react-native";
import { Layout } from "../../common";
import {Header} from "../../components";

export function TransactionHistory() {
  return (
    <Layout>
      <Header title="История доходов" isNotCircle />
      <Text>TransactionHistory</Text>
    </Layout>
  );
}
