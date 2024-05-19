import { useNavigation } from "@react-navigation/native";
import { useTextField, useToggle } from "../../../../../../hooks";
import { useChains } from "../../../../../../hooks/useChains";
import { NAVIGATE } from "../../../../../../constants";
import { useSelect } from "../../../../../../hooks/useSelect";

/**
 * Хук для формы с фильтрами
 * @returns Возвращает значение и обработчик для каждого поля и обработчик для применения или сброса фильтров.
 */
export function useFilterForm() {
  const { navigate } = useNavigation();
  const { filterSettings, handleResetFilterChains, handleFilterChains } = useChains();

  const [isEnabledCurrency, handleIsEnabledCurrency] = useToggle(filterSettings.isAllCurrencyList);
  const [isEnabledPlatform, handleIsEnabledPlatform] = useToggle(filterSettings.isAllPlatformList);
  const [id, idParams] = useTextField({ initValue: filterSettings.id })
  const [maxLength, maxLengthParams] = useTextField({ initValue: filterSettings.maxLengthChains});
  const [profit100Min, profit100MinParams] = useTextField({ initValue: filterSettings.profit.profit100.minValue });
  const [profit100Max, profit100MaxParams] = useTextField({ initValue: filterSettings.profit.profit100.maxValue });
  const [profit1000Min, profit1000MinParams] = useTextField({ initValue: filterSettings.profit.profit1000.minValue });
  const [profit1000Max, profit1000MaxParams] = useTextField({ initValue: filterSettings.profit.profit1000.maxValue });
  const [profit10000Min, profit10000MinParams] = useTextField({ initValue: filterSettings.profit.profit10000.minValue });
  const [profit10000Max, profit10000MaxParams] = useTextField({ initValue: filterSettings.profit.profit10000.maxValue });

  const currencyList = useSelect(filterSettings.currencyList);
  const platformList = useSelect(filterSettings.platformList);

  /**
   * Функция для сброса фильтров и перехода на экран с цепочками
   */
  function handleResetFilters() {
    handleResetFilterChains();
    navigate(NAVIGATE.Chains);
  }

  function handleSetFilterChains() {
    handleFilterChains({
      id: id.value,
      isAllCurrencyList: isEnabledCurrency,
      isAllPlatformList: isEnabledPlatform,
      // @ts-ignore
      currencyList: currencyList.value,
      // @ts-ignore
      platformList: platformList.value,
      maxLengthChains: maxLength.value,
      profit: {
        profit100: { minValue: profit100Min.value, maxValue: profit100Max.value },
        profit1000: { minValue: profit1000Min.value, maxValue: profit1000Max.value },
        profit10000: { minValue: profit10000Min.value, maxValue: profit10000Max.value },
      },
    });
    navigate(NAVIGATE.Chains);
  }

  return {
    enabledCurrency: {
      isEnabled: isEnabledCurrency,
      handleIsEnabled: handleIsEnabledCurrency,
    },
    enabledPlatform: {
      isEnabled: isEnabledPlatform,
      handleIsEnabled: handleIsEnabledPlatform,
    },
    id,
    maxLength,
    profit100Min,
    profit100Max,
    profit1000Min,
    profit1000Max,
    profit10000Min,
    profit10000Max,
    handleResetFilters,
    handleSetFilterChains,
    currencyList,
    platformList,
  }
}