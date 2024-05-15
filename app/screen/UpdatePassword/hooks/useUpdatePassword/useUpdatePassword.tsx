import { useTextField } from "../../../../hooks";

export function useUpdatePassword() {
  const [currentPassword] = useTextField({ initValue: '' });
  const [newPassword] = useTextField({ initValue: '' });
  const [repeatNewPassword] = useTextField({ initValue: '' });

  return {
    currentPassword,
    newPassword,
    repeatNewPassword,
  }
}