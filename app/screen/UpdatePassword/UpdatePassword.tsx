import { Button, Layout, Padding, TextField } from "../../common";
import { Header } from "../../components";
import { useUpdatePassword } from "./hooks/useUpdatePassword";

export function UpdatePassword() {
  const {
    currentPassword,
    newPassword,
    repeatNewPassword,
  } = useUpdatePassword();

  return (
    <Layout>
      <Header title="Смена пароля" isNotCircle />

      <Padding>
        <TextField {...currentPassword } placeholder="Введите старый пароль" isSecure />
        <TextField {...newPassword } placeholder="Введите новый пароль" isSecure />
        <TextField {...repeatNewPassword } placeholder="Повторите новый пароль" isSecure />
        <Button title="Обновить пароль" onPress={() => {}} />
      </Padding>
    </Layout>
  );
}
