import { useIncome } from "../../../../hooks/useIncome";

export function useTransactionHistory() {
  const { incomePoints, allProfit, isLoading, error } = useIncome();

  return {
    incomePoints,
    allProfit,
    isLoading,
    error,
  }
}
