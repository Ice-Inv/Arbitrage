import { Layout } from "../../common";
import { Header } from "../../components";
import { Chart } from "../../components/Chart";
import { LastDeal } from "../../components";
import { RedirectAllDeal } from "./components/RedirectAllDeal";
import {AddDeal} from "./components/AddDeal";
import { useIncome } from "./hooks/useIncome";

export function Income() {
  const {
    lastProfit,
    chartProfitData,
  } = useIncome();

  return (
    <Layout>
      <Header title="Ведение доходов"  isNotCircle />
      <Chart data={chartProfitData.profits} dates={chartProfitData.dates} />
      <LastDeal
        label={'Последняя сделка'}
        value={lastProfit.profit}
        dynamicValueFirst={lastProfit.allProfit}
        dynamicValueSecond={lastProfit.percent}
      />
      <RedirectAllDeal/>
      <AddDeal/>
    </Layout>
  );
}
