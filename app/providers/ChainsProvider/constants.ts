import { ChainsFilters, ProfitChainPoint } from "../../types";

/**
 * Настройки фильтра точки прибыльности по умолчанию
 */
const DEFAULT_PROFIT_FILTER: ProfitChainPoint = {
  maxValue: '',
  minValue: '',
};

/**
 * Настройки фильтров по умолчанию
 */
export const DEFAULT_SETTINGS_FILTERS: ChainsFilters = {
  id: '',
  isAllCurrencyList: false,
  isAllPlatformList: false,
  currencyList: [],
  platformList: [],
  maxLengthChains: '',
  profit: {
    profit100: DEFAULT_PROFIT_FILTER,
    profit1000: DEFAULT_PROFIT_FILTER,
    profit10000: DEFAULT_PROFIT_FILTER,
  },
};
