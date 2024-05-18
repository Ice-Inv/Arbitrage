import {Button, Padding} from "../../../../common";
import {useNavigation} from "@react-navigation/native";
import {NAVIGATE} from "../../../../constants";

export function RedirectAllDeal() {
  const { navigate } = useNavigation();

  /**
   * Функция перехода на страницу со всеми сделками
   */
  function handleRedirectAllDeal() {
    navigate(NAVIGATE.TransactionHistory);
  }

  return(
    <Padding>
      <Button title="Перейти ко всем сделкам" onPress={handleRedirectAllDeal}/>
    </Padding>
  )
}
