import { SERVICE_API } from '@env';
import { User } from '../../providers/AuthProvider/types';
import { baseService, authenticationService } from '../../api';
import { saveToken, removeToken, toCamelCase } from '../../utils';
import { ACCESS_TOKEN, REFRESH_TOKEN, TOKEN_TYPE } from '../../constants';
import { AUTH_ROUTES } from '../../routes/Auth';
import { Tokens } from '../../types';

/**
 * Функция для входа пользователя.
 * @param email Email пользователя.
 * @param password Пароль пользователя.
 * @returns Объект с ответом сервера.
 */
async function postLoginUser(email: string, password: string): Promise<void> {
  try {
    const { data } = await authenticationService.post<Tokens>(AUTH_ROUTES.Login, {
      email: email.toLowerCase(),
      password,
    });

    const { accessToken, refreshToken, tokenType } = toCamelCase(data);

    await saveToken(ACCESS_TOKEN, accessToken);
    await saveToken(REFRESH_TOKEN, refreshToken);
    await saveToken(TOKEN_TYPE, tokenType);
  } catch (error) {
    throw error;
  }
}

/**
 * Функция для регистрации нового пользователя.
 * @param name Имя пользователя.
 * @param email Email пользователя.
 * @param password Пароль пользователя.
 * @returns Объект с ответом сервера.
 */
async function postRegisterUser(name: string, email: string, password: string): Promise<void> {
  try {
    await authenticationService.post(AUTH_ROUTES.Register, {
      name,
      email,
      password,
    });

    await postLoginUser(email, password);
  } catch (error) {
    throw error;
  }
}

/**
 * Функция для получения информации о пользователе.
 * @returns Объект с ответом сервера.
 */
async function getUserInfo(): Promise<User | null> {
  try {
    const { data } = await baseService.get<User>(AUTH_ROUTES.UserInfo);

    return data;
  } catch (error) {
    throw error;
  }
}

// Выйти из аккаунта и отвязать устройство
const getLogout = async (): Promise<boolean> => {
  // const { data } = await baseService.get<boolean>(`${SERVICE_API}/user/logout`)
  removeToken(ACCESS_TOKEN);
  removeToken(REFRESH_TOKEN);

  return true;
}

// Установить часовой пояс пользователя
const putTimezone = async (uid: string, timezone: string): Promise<string> => {
  const { data } = await baseService.put<string>(`${SERVICE_API}/user/timezone`, {
    params: {
      uid,
      timezone,
    }
  })
  return data;
}

// Установить локацию пользователя
const putLocale = async (uid: string, locale: string): Promise<string> => {
  const { data } = await baseService.put<string>(`${SERVICE_API}/user/locale`, {
    params: {
      uid,
      locale,
    }
  })
  return data;
}

// Установить валюту пользователя
const putCurrency = async (uid: string, currency: string): Promise<string> => {
  const { data } = await baseService.put<string>(`${SERVICE_API}/user/currency`, {
    params: {
      uid,
      currency,
    }
  })
  return data;
}

export const authService = {
  getUserInfo,
  postRegisterUser,
  postLoginUser,
  getLogout,
  putTimezone,
  putLocale,
  putCurrency,
}

