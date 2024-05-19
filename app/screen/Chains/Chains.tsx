import { Layout } from "../../common";
import { Header } from "../../components";
import { ChainList } from "./components/ChainList";
import { ChainsToolbar } from "./components/ChainsToolbar";

export function Chains() {
  return (
    <Layout>
      <Header title="Цепочки" />
      <ChainsToolbar />
      <ChainList />
    </Layout>
  );
}
