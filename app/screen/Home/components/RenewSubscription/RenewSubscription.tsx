import {Button, Padding} from "../../../../common";
import {useNavigation} from "@react-navigation/native";
import {NAVIGATE} from "../../../../constants";

export function RenewSubscription() {
  const { navigate } = useNavigation();
  /**
   * Функция перехода на страницу выбора тарифа
   */
  function handleRedirectRates() {
    navigate(NAVIGATE.Rates);
  }

  return(
    <Padding>
      <Button title="Продлить подписку" onPress={handleRedirectRates}/>
    </Padding>
  )
}
