import { useEffect } from 'react';
import { useIncome as useIncomeData } from '../../../../hooks/useIncome';

export function useIncome() {
  const { lastProfit, chartProfitData, isLoading, error } = useIncomeData();

  return {
    lastProfit,
    chartProfitData,
    isLoading,
    error,
  }
}
