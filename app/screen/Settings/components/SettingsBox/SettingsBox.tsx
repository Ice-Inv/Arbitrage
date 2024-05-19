import {Button, Padding, Select} from "../../../../common";
import {useFilterForm} from "../../../ChainsFilters/components/FiltersForm/hooks/useFilterForm";

export function SettingsBox() {
  const {
    currencyList,
    platformList,
  } = useFilterForm();
  return(
    <Padding>
      <Select { ...currencyList } placeholder={'Ваш часовой пояс'} options={[]} />
      <Select { ...currencyList } placeholder={'Приоритетный язык на биржах'} options={[]} />
      <Select { ...currencyList } placeholder={'Приоритетный язык на биржах'} options={[]} />
      <Select { ...currencyList } placeholder={'Прибыльность в % для уведомлений'} options={[]} />
      <Button title="Сохранить настройки" onPress={() => {}}/>
    </Padding>
  )
}
