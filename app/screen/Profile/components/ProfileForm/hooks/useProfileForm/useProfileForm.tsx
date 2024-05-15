import { useNavigation } from "@react-navigation/native";
import { useAuth, useTextField } from "../../../../../../hooks";
import { NAVIGATE } from "../../../../../../constants";

export function useProfileForm() {
  const { user, logout } = useAuth();
  const { navigate } = useNavigation();

  const [name, nameParams] = useTextField({initValue: String(user?.name)});
  const [email, emailParams] = useTextField({initValue: String(user?.email)});

  function handleSetScreenUpdatePassword() {
    navigate(NAVIGATE.UpdatePassword);
  }

  function handleSetScreenSettings() {
    navigate(NAVIGATE.Settings);
  }

  return {
    name,
    email,
    logout,
    handleSetScreenUpdatePassword,
    handleSetScreenSettings,
  };
}
