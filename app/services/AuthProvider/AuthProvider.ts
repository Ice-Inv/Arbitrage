import { SERVICE_API } from '@env';
import { LoginData, RegisterData, User } from '../../providers/AuthProvider/types';
import { iceService } from '../../api';

const postRegister = async (params: RegisterData): Promise<User> => {
  const { data } = await iceService.post<User>(`${SERVICE_API}/register`, {
    data: params
  });
  return data;
}

const postLogin = async (params: LoginData): Promise<User> => {

  const { data } = await iceService.post<User>(`${SERVICE_API}/login`, {
    data: {
      password: params.password,
      name: params.name,
      email: params.email,
    }
  })
  return data;
}

const getLogout = async (id: string): Promise<boolean> => {
  const { data } = await iceService.get<boolean>(`${SERVICE_API}/logout`, {
    params: {
      id,
    }
  })
  return data;
}
const putTimezone = async (id: string, timeZone: string): Promise<string> => {
  const { data } = await iceService.put<string>(`${SERVICE_API}/user/timezone`, {
    params: {
      id,
      timeZone,
    }
  })
  return data;
}

const putLocale = async (id: string, locale: string): Promise<string> => {
  const { data } = await iceService.put<string>(`${SERVICE_API}/user/locale`, {
    params: {
      id,
      locale,
    }
  })
  return data;
}

const putCurrency = async (id: string, currency: string): Promise<string> => {
  const { data } = await iceService.put<string>(`${SERVICE_API}/user/currency`, {
    params: {
      id,
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

