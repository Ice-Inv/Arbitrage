import { Layout } from "../../common";
import { Header, LastDeal } from "../../components";
import { Chart } from "../../components/Chart";
import { RenewSubscription } from "./components/RenewSubscription";
import { InvitationCode } from "./components/InvitationСode";
import { ScrollableButtonSlider } from "./components/ScrollableButtonSlider";
import { ForecastInfoBox } from "../../common/ForecastInfoBox";

export function Home() {
  const data = [150, 210, 240, 195, 385, 420, 280, 250, 360, 500, 320];
  const dates = [
    new Date(2023, 0, 10), new Date(2023, 1, 1), new Date(2023, 2, 1),
    new Date(2023, 3, 1), new Date(2023, 4, 1), new Date(2023, 5, 1),
    new Date(2023, 6, 1), new Date(2023, 7, 1), new Date(2023, 8, 1),
    new Date(), new Date()
  ];

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
      <Chart data={data} dates={dates} />
      <InvitationCode code={'EFR4-M5DF-LKIO-A9H0-7HCP'}/>
      <LastDeal label={'Последняя сделка'} value={12450.86} dynamicValueFirst={14.2} dynamicValueSecond={20.4}/>
      <RenewSubscription/>
    </Layout>
  );
}
