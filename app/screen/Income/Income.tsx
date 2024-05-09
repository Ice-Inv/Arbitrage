import { Layout } from "../../common";
import { Header } from "../../components";
import { Chart } from "../../components/Chart";

const data = [150, 210, 240, 195, 385, 420, 280, 250, 360, 500, 320];
  const dates = [
    new Date(2023, 0, 10), new Date(2023, 1, 1), new Date(2023, 2, 1),
    new Date(2023, 3, 1), new Date(2023, 4, 1), new Date(2023, 5, 1),
    new Date(2023, 6, 1), new Date(2023, 7, 1), new Date(2023, 8, 1),
    new Date(), new Date()
  ];

export function Income() {
  return (
    <Layout>
      <Header title="Income" />
      <Chart data={data} dates={dates} />
    </Layout>
  );
}
