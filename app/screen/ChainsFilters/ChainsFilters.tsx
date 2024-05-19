import { Layout } from "../../common";
import { FiltersForm } from "./components/FiltersForm";
import { Header } from "./components/Header";

export function ChainsFilters() {
  return (
    <Layout>
      <Header />
      <FiltersForm />
    </Layout>
  );
}
