import { useAuth } from "../../../../hooks/useAuth";
import { useTextField, useToggle } from "../../../../hooks";
import { useEffect } from "react";

export function useAuthorization() {
  const { isLoading, login, register } = useAuth();

  const [userLogin, userLoginParams] = useTextField({initValue: ''});
  const [password, passwordParams] = useTextField({initValue: ''});
  const [repeatPassword, repeatPasswordParams] = useTextField({initValue: ''});

  const [isRegistration, handleIsRegistration] = useToggle();

  function handleRegister() {
    register(userLogin.value, password.value)
  }

  function handleLogin() {
    login(userLogin.value, password.value)
  }

  return {
    isLoading,
    userLogin,
    password,
    repeatPassword,
    handleRegister,
    handleLogin,
    isRegistration,
    handleIsRegistration,
  }
}