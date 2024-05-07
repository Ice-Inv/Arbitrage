import { useAuth } from "../../../../hooks/useAuth";
import { useTextField, useToggle } from "../../../../hooks";
import { useEffect } from "react";
import { RegexpPattern } from "../../../../constants";
import { ERROR_TEXT } from "./constants";

export function useAuthorization() {
  const { isLoading, login, register } = useAuth();

  const [userLogin, userLoginParams] = useTextField({initValue: '', isRequired: true, regexp: RegexpPattern.changePassword});
  const [password, passwordParams] = useTextField({initValue: '', isRequired: true, regexp: RegexpPattern.changePassword});
  const [repeatPassword, repeatPasswordParams] = useTextField({initValue: ''});

  function validatePassword(): boolean {
    return RegexpPattern.submitPassword.test(password.value);
  }
  
  function validateRepeatPassword(): boolean {
    return !(password.value !== repeatPassword.value)
  }
  
  function validateLogin(): boolean {
    return !(userLogin.value.length <= 5)
  }

  const [isRegistration, handleIsRegistration] = useToggle();

  function handleRegister() {
    if (
      !userLoginParams.getValidate(validateLogin, ERROR_TEXT.Login) ||
      !passwordParams.getValidate(validateRepeatPassword, ERROR_TEXT.RepeatPassword) ||
      !repeatPasswordParams.getValidate(validatePassword, ERROR_TEXT.PasswordEasy)
    ) return;

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