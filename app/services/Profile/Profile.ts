import { baseService } from "../../api";
import { ROUTES } from "./routes";

/**
 * Функция для смены пароля
 * @param prevPassword Предыдущий пароль пользователя.
 * @param newPassword Новый пароль пользователя.
 */
async function putUpdatePassword(prevPassword: string, newPassword: string): Promise<void> {
  try {
    await baseService.put(ROUTES.UpdatePassword, {
      prevPassword,
      newPassword,
    });
  } catch (error) {
    throw error;
  }
}

export const profileService = {
  putUpdatePassword,
}
