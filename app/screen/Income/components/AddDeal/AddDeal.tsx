import { Button, MainBox, Padding, TextField } from "../../../../common";
import { View } from "react-native";
import { useTheme } from "@rneui/themed";
import { useAddDeal } from "./hooks/useAddDeal";

export function AddDeal() {
  const {
    theme: {
      colors: {
        element2,
      }
    }
  } = useTheme();

  const {
    id,
    openChain,
    closeChain,
  } = useAddDeal();

  return(
    <Padding>
      <MainBox style={{ paddingVertical: 0, marginTop: 0, marginBottom: 30 }}>
        <View>
          <TextField { ...id } placeholder="ID цепочки" style={{ backgroundColor: element2}}/>
          <TextField { ...openChain } placeholder="Вход в цепочку" style={{ backgroundColor: element2}}/>
          <TextField { ...closeChain } placeholder="Выход из цепочки" style={{ backgroundColor: element2}}/>
          <Button title="Добавить" onPress={() => {}}/>
        </View>
      </MainBox>
    </Padding>
  );
}
