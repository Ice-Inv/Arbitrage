import { createContext, useEffect, useMemo, useState } from "react";
import { ChartProfitUser, IncomeContextProps, IncomeData, IncomeParams, LastProfitData } from "../../types/Income";
import { IncomeProviderProps } from "./types";
import { incomeService } from "../../services";
import { useAuth } from "../../hooks";
import { CHART_INIT_DATA, LAST_PROFIT_INIT } from "./constants";
import { getChartDataAndAllProfit, getLastOrderProfit } from "./utils";

export const IncomeContext = createContext<IncomeContextProps>({} as IncomeContextProps);

export function IncomeProvider({
  children,
}: IncomeProviderProps) {
  const { user } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [incomePoints, setIncomePoints] = useState<IncomeData[]>([]);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [allProfit, setAllProfit] = useState(0);
  const [lastProfit, setLastProfit] = useState<LastProfitData>(LAST_PROFIT_INIT);
  const [chartProfitData, setChartProfitData] = useState<ChartProfitUser>(CHART_INIT_DATA);

  async function handleGetAllPoint() {
    setIsLoading(true);
    setError(null);

    try {
      const incomeList = await incomeService.getPointList();

      const { allProfit, chartData } = getChartDataAndAllProfit(incomeList);

      setIncomePoints(incomeList);
      setAllProfit(allProfit);
      setLastProfit(getLastOrderProfit(incomeList, allProfit));
      setChartProfitData(chartData);

      console.log(allProfit, chartData);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSetPoint(params: IncomeParams) {
    setIsLoading(true);
    setError(null);

    try {
      await incomeService.postSetNewPoint(params);

      await handleGetAllPoint();
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!user) {
      setIncomePoints([]);
      setLastProfit(LAST_PROFIT_INIT);
      setChartProfitData(CHART_INIT_DATA);
      return;
    };

    handleGetAllPoint();
  }, [user]);

  useEffect(() => {
    setIsLoadingInitial(false);
  }, []);

  const value: IncomeContextProps = useMemo(() => ({
    incomePoints,
    allProfit,
    lastProfit,
    chartProfitData,
    error,
    isLoading,
    handleSetPoint,
    handleGetAllPoint,
  }), [isLoading, incomePoints, error]);

  return (
    <IncomeContext.Provider value={value}>
     {!isLoadingInitial && children}
    </IncomeContext.Provider>
  )
}
