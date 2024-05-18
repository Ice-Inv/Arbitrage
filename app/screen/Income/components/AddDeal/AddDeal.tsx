import {Button, MainBox, Padding, TextField} from "../../../../common";
import {View} from "react-native";
import {useTheme} from "@rneui/themed";
import {NAVIGATE} from "../../../../constants";

export function AddDeal() {
  const {
    theme: {
      colors: {
        element2,
      }
    }
  } = useTheme();

  return(
    <Padding>
      <MainBox style={{ paddingVertical: 0, marginTop: 0, marginBottom: 30 }}>
        <View>
          <TextField onChange={() => {}} value={''} placeholder="ID цепочки" style={{ backgroundColor: element2}}/>
          <TextField onChange={() => {}} value={''} placeholder="Вход в цепочку" style={{ backgroundColor: element2}}/>
          <TextField onChange={() => {}} value={''} placeholder="Выход из цепочки" style={{ backgroundColor: element2}}/>
          <Button title="Добавить" onPress={() => {}}/>
        </View>
      </MainBox>
    </Padding>
  );
}
