import { Layout } from "../../common";
import { Header } from "../../components";
import { Rate } from "./components/Rates";

export function Rates() {
  return (
    <Layout>
      <Header title="Выбрать тариф" isNotCircle />
      <Rate/>
    </Layout>
  );
}
