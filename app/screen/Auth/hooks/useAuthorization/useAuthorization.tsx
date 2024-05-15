import { useAuth } from "../../../../hooks/useAuth";
import { useTextField, useToggle } from "../../../../hooks";
import { RegexpPattern } from "../../../../constants";

export function useAuthorization() {
  const { isLoading, login, register, error } = useAuth();

  const [uname, unameParams] = useTextField({initValue: '', isRequired: true, regexp: RegexpPattern.changePassword});
  const [email, emailParams] = useTextField({initValue: '', isRequired: true});
  const [password, passwordParams] = useTextField({initValue: '', isRequired: true, regexp: RegexpPattern.changePassword});
  const [repeatPassword, repeatPasswordParams] = useTextField({initValue: ''});

  function validatePassword(): boolean {
    return RegexpPattern.submitPassword.test(password.value);
  }
  
  function validateRepeatPassword(): boolean {
    return !(password.value !== repeatPassword.value)
  }
  
  function validateLogin(): boolean {
    return !(uname.value.length <= 2)
  }

  const [isRegistration, handleIsRegistration] = useToggle();

  function handleRegister() {
    // if (
    //   !userLoginParams.getValidate(validateLogin, ERROR_TEXT.Login) ||
    //   !passwordParams.getValidate(validateRepeatPassword, ERROR_TEXT.RepeatPassword) ||
    //   !repeatPasswordParams.getValidate(validatePassword, ERROR_TEXT.PasswordEasy)
    // ) return;

    register(uname.value, email.value, password.value)
  }

  function handleLogin() {
    login(email.value, password.value)
  }

  return {
    isLoading,
    error,
    uname,
    password,
    email,
    repeatPassword,
    handleRegister,
    handleLogin,
    isRegistration,
    handleIsRegistration,
  }
}