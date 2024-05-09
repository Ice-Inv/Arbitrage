import { useAuth, useTextField } from "../../../../../../hooks";

export function useProfileForm() {
  const { user, logout } = useAuth();

  const [login, loginParams] = useTextField({initValue: String(user?.login)});
  const [email, emailParams] = useTextField({initValue: String(user?.email)});

  return {
    login,
    email,
    logout,
  };
}
