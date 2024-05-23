import { Button, ButtonGradient, Padding, TextField } from "../../../../common";
import { Devices } from "./components/Devices";
import { InvitationCode } from "./components/InvitationСode";
import { useProfileForm } from "./hooks/useProfileForm";

export function ProfileForm() {
  const {
    name,
    email,
    logout,
    handleSetScreenUpdatePassword,
    handleSetScreenSettings,
    handleSetScreenCorretations,
  } = useProfileForm();

  return (
    <Padding>
      <TextField {...name } placeholder="Ваше имя" isDisable />
      <TextField {...email } placeholder="E-mail" isDisable />
      <ButtonGradient title="Сменить пароль" onPress={handleSetScreenUpdatePassword} />
      <ButtonGradient title="Перейти к настройкам" onPress={handleSetScreenSettings} />
      <ButtonGradient title="Корреляции" onPress={handleSetScreenCorretations} />
      <InvitationCode code={'EFR4-M5DF-LKIO-A9H0-7HCP'} />
      <Devices />
      <Button title="Выход" onPress={logout}/>
    </Padding>
  );
}
