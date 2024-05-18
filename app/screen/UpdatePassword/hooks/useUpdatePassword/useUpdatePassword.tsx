import { useState } from "react";
import { useTextField } from "../../../../hooks";
import { profileService } from "../../../../services";

export function useUpdatePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [currentPassword] = useTextField({ initValue: '' });
  const [newPassword] = useTextField({ initValue: '' });
  const [repeatNewPassword] = useTextField({ initValue: '' });

  async function handlerUpdatePassword() {
    setIsLoading(false);
    setError(null);

    try {
      await profileService.putUpdatePassword(currentPassword.value, newPassword.value);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }
  

  return {
    isLoading,
    error,
    currentPassword,
    newPassword,
    repeatNewPassword,
    handlerUpdatePassword,
  }
}