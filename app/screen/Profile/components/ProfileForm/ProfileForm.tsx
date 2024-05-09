import { Button, ButtonGradient, Padding, TextField } from "../../../../common";
import { useProfileForm } from "./hooks/useProfileForm";

export function ProfileForm() {
  const {
    login,
    email,
    logout,
  } = useProfileForm();

  return (
    <Padding>
      <TextField {...login } placeholder="Логин" isDisable />
      <TextField {...email } placeholder="E-mail" isDisable />
      <ButtonGradient title="Сменить пароль" onPress={() => {}} />
      <ButtonGradient title="Перейти к настройкам" onPress={() => {}} />
      <Button title="Выход" onPress={logout}/>
    </Padding>
  );
}
