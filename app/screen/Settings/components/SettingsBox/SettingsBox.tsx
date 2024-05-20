import { Button, Padding, Select, TextField } from "../../../../common";
import { useFilterForm } from "../../../ChainsFilters/components/FiltersForm/hooks/useFilterForm";

export function SettingsBox() {
  const {
    currencyList,
    id,
  } = useFilterForm();

  return(
    <Padding>
      <Select { ...currencyList } placeholder={'Ваш часовой пояс'} options={[]} />
      <Select { ...currencyList } placeholder={'Приоритетный язык на биржах'} options={[]} />
      <Select { ...currencyList } placeholder={'Приоритетный язык на биржах'} options={[]} />
      <TextField
        { ...id }
        placeholder={'Прибыльность в % для уведомлений'}
      />
      <Button title="Сохранить настройки" onPress={() => {}}/>
    </Padding>
  )
}
