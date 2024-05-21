import { Dimensions } from "react-native";
import { Button, Padding, Select, TextField } from "../../../../common";
import { FilterGrid } from "./components/FilterGrid";
import { FilterSwitch } from "./components/FilterSwitch";
import { LABEL_FORM } from "./constants";
import { useFilterForm } from "./hooks/useFilterForm";
import { ResetFilters } from "./components/ResetFilters";

const { width } = Dimensions.get('window');
const WIDTH_TEXT_FIELD = width / 2 - 22;

/**
 * Предоставляет компонент с контролируемыми полями для фильтров цепочек
 * @returns Возвращает форму с фильтрами
 */
export function FiltersForm() {
  const {
    enabledCurrency,
    enabledPlatform,
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
    currencyAllList,
    platformAllList,
  } = useFilterForm();

  return (
    <Padding>
      {/* Строгий фильтр по валютам */}
      <FilterSwitch
        { ...enabledCurrency }
        label={LABEL_FORM.enabledCurrency}
      />

      {/* Строгий фильтр по платформам */}
      <FilterSwitch
        { ...enabledPlatform }
        label={LABEL_FORM.enabledPlatform}
        style={{ marginBottom: 0 }}
      />

      {/* ID цепочки */}
      <TextField
        { ...id }
        placeholder={LABEL_FORM.id}
      />

      <Select
        { ...currencyList }
        options={currencyAllList}
        placeholder={LABEL_FORM.currencies}
      />
      <Select
        { ...platformList }
        options={platformAllList}
        placeholder={LABEL_FORM.platforms}
      />

      {/* Максимальная длина цепочки */}
      <TextField
        { ...maxLength }
        placeholder={LABEL_FORM.maxLength}
      />

      {/* Прибыльность при 100$ */}
      <FilterGrid label={LABEL_FORM.profit100}>
        <TextField
          { ...profit100Min }
          placeholder={LABEL_FORM.rageOne}
          style={{ width: WIDTH_TEXT_FIELD }}
        />
        <TextField
          { ...profit100Max }
          placeholder={LABEL_FORM.rangeTwo}
          style={{ width: WIDTH_TEXT_FIELD }}
        />
      </FilterGrid>

      {/* Прибыльность при 1000$ */}
      <FilterGrid label={LABEL_FORM.profit1000}>
        <TextField
          { ...profit1000Min }
          placeholder={LABEL_FORM.rageOne}
          style={{ width: WIDTH_TEXT_FIELD }}
        />
        <TextField
          { ...profit1000Max }
          placeholder={LABEL_FORM.rangeTwo}
          style={{ width: WIDTH_TEXT_FIELD }}
        />
      </FilterGrid>

      {/* Прибыльность при 10000$ */}
      <FilterGrid label={LABEL_FORM.profit10000}>
        <TextField
          { ...profit10000Min }
          placeholder={LABEL_FORM.rageOne}
          style={{ width: WIDTH_TEXT_FIELD }}
        />
        <TextField
          { ...profit10000Max }
          placeholder={LABEL_FORM.rangeTwo}
          style={{ width: WIDTH_TEXT_FIELD }}
        />
      </FilterGrid>

      {/* Сброс фильтров цепочек */}
      <ResetFilters handleResetFilters={handleResetFilters} />

      {/* Применение фильтров цепочек */}
      <Button onPress={handleSetFilterChains} title={LABEL_FORM.submit} />
    </Padding>
  );
}
