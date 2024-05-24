import { useContext } from "react";
import { IncomeContext } from "../../providers/IncomeProvider";

export const useIncome = () => useContext(IncomeContext);
