import { useAuth } from "../../../../hooks/useAuth";
import { useTextField, useToggle } from "../../../../hooks";

export function useAuthorization() {
  const { isLoading, login, register } = useAuth();

  const [name, nameParams] = useTextField({initValue: ''});
  const [email, emailParams] = useTextField({initValue: ''});
  const [phone, phoneParams] = useTextField({initValue: ''});
  const [password, passwordParams] = useTextField({initValue: ''});
  const [repeatPassword, repeatPasswordParams] = useTextField({initValue: ''});

  const [isRegistration, handleIsRegistration] = useToggle();

  function handleRegister() {
    register({
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    })
  }

  function handleLogin() {
    login({
      name: name.value,
      email: email.value,
      password: password.value,
    })
  }

  return {
    isLoading,
    name,
    email,
    phone,
    password,
    repeatPassword,
    handleRegister,
    handleLogin,
    isRegistration,
    handleIsRegistration,
  }
}