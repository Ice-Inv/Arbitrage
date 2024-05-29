import { Layout } from "../../common";
import { Header, LastDeal } from "../../components";
import { Chart } from "../../components/Chart";
import { RenewSubscription } from "./components/RenewSubscription";
import { InvitationCode } from "./components/InvitationСode";
import { ScrollableButtonSlider } from "./components/ScrollableButtonSlider";
import { ForecastInfoBox } from "../../common/ForecastInfoBox";
import { useIncome } from "../../hooks/useIncome";

export function Home() {
  const { lastProfit, chartProfitData } = useIncome();

  return (
    <Layout>
      <Header />
      <ScrollableButtonSlider/>
      <ForecastInfoBox
        forecastValue={203705}
        mainCurrency={'RUB'}
        mainCurrencyValue={96}
        dynamicValueFirst={+4.57}
        dynamicValueSecond={1.3}
      />
      <Chart data={chartProfitData.profits} dates={chartProfitData.dates} />
      <InvitationCode code="EFR4-M5DF-LKIO-A9H0-7HCP" />
      <LastDeal
        label="Последняя сделка"
        value={lastProfit.profit}
        dynamicValueFirst={lastProfit.allProfit}
        dynamicValueSecond={lastProfit.percent}
      />
      <RenewSubscription/>
    </Layout>
  );
}
