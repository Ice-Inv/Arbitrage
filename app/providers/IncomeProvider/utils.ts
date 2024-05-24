import { ChartDataAndAllProfit, IncomeData, LastProfitData } from "../../types/Income";
import { CHART_INIT_DATA } from "./constants";

export function getChartDataAndAllProfit(incomeList: IncomeData[]): ChartDataAndAllProfit {
  return incomeList.reduce((acc, income) => {
    const profit = income.outputValue - income.inputValue;

    return {
      allProfit: acc.allProfit + profit,
      chartData: {
        profits: [ ...acc.chartData.profits, profit ],
        dates: [ ...acc.chartData.dates, income.creationTime ],
      }
    }
  }, { allProfit: 0, chartData: CHART_INIT_DATA })
}

export function getLastOrderProfit(incomeList: IncomeData[], allProfit: number): LastProfitData {
  let lastProfit = 0;
  let lastPercent = 0;

  if (incomeList.length) {
    const income = incomeList[incomeList.length - 1];

    lastProfit = income.outputValue - income.inputValue;
    lastPercent = Number((lastProfit * 100 / allProfit).toFixed(2));
  }

  return {
    allProfit,
    profit: lastProfit,
    percent: lastPercent,
  }
}
