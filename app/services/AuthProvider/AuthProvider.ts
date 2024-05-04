import { SERVICE_API } from '@env';
import { LoginData, RegisterData, User } from '../../providers/AuthProvider/types';
import { iceService } from '../../api';

// Регистрация в приложении
const postRegister = async (params: RegisterData): Promise<User> => {
  // const { data } = await iceService.post<User>(`${SERVICE_API}/user/register`, {
  //   data: params,
  // });
  const data = {
    name: 'Noname',
    phone: '+79003004040',
    email: 'example@example.com',
    timezone: 'UTS+4',
    currency: 'EUR',
    locale: 'en',
    id: '1',
  }

  return data;
}

// Войти в приложение
const postLogin = async (params: LoginData): Promise<User> => {
  const { data } = await iceService.post<User>(`${SERVICE_API}/user/login`, {
    data: params,
  })
  return data;
}

// Выйти из аккаунта и отвязать устройство
const getLogout = async (uid: string): Promise<boolean> => {
  const { data } = await iceService.get<boolean>(`${SERVICE_API}/user/logout`, {
    params: {
      uid,
    }
  })
  return data;
}

// Установить часовой пояс пользователя
const putTimezone = async (uid: string, timezone: string): Promise<string> => {
  const { data } = await iceService.put<string>(`${SERVICE_API}/user/timezone`, {
    params: {
      uid,
      timezone,
    }
  })
  return data;
}

// Установить локацию пользователя
const putLocale = async (uid: string, locale: string): Promise<string> => {
  const { data } = await iceService.put<string>(`${SERVICE_API}/user/locale`, {
    params: {
      uid,
      locale,
    }
  })
  return data;
}

// Установить валюту пользователя
const putCurrency = async (uid: string, currency: string): Promise<string> => {
  const { data } = await iceService.put<string>(`${SERVICE_API}/user/currency`, {
    params: {
      uid,
      currency,
    }
  })
  return data;
}

export const authService = {
  postRegister,
  postLogin,
  getLogout,
  putTimezone,
  putLocale,
  putCurrency,
}

