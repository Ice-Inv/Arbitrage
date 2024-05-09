import axios from "axios";
import { SERVICE_API } from '@env';
import { saveToken, getToken, removeToken, toCamelCase } from '../utils';
import { ACCESS_TOKEN, DEFAULT_TOKEN_TYPE, REFRESH_TOKEN, TOKEN_TYPE } from "../constants";
import { AUTH_ROUTES } from "../routes/Auth";
import { AUTH_ERROR } from "../error/Auth";
import { Tokens } from "../types/Auth";
import {stringify} from 'qs';

// Конфигурация базового сервиса
export const baseService = axios.create({
  baseURL: 'http://93.183.92.195:8001',
});

// Конфигурация сервиса для аутентификации
export const authenticationService = axios.create({
  baseURL: 'http://93.183.92.195:8001',
});

// Конфигурация сервиса обновления токенов
const refreshService = axios.create({
  baseURL: 'http://93.183.92.195:8001',
});

// Запрос для обновления токена
async function refreshAccessToken() {
  const currentRefreshToken = await getToken(REFRESH_TOKEN);

  if (!currentRefreshToken) {
    throw new Error(AUTH_ERROR.NotRefreshToken);
  }

  try {
    const response = await refreshService.post<Tokens>(AUTH_ROUTES.Refresh, { currentRefreshToken });
    const { accessToken, refreshToken, tokenType } = toCamelCase(response.data);

    // Сохраняем новые токены
    await saveToken(ACCESS_TOKEN, accessToken);
    await saveToken(REFRESH_TOKEN, refreshToken);
    await saveToken(TOKEN_TYPE, tokenType);

    return accessToken;
  } catch (error) {
    console.error(AUTH_ERROR.UpdateToken, error);
    return null;
  }
}

// Настройка перехватчика для добавления токена в заголовок
baseService.interceptors.request.use(
  async (request) => {
    request.paramsSerializer = (params) => {
      return stringify(params, {arrayFormat: 'repeat'})
    }
    const accessToken = await getToken(ACCESS_TOKEN);
    const tokenType = await getToken(TOKEN_TYPE) || DEFAULT_TOKEN_TYPE;
    if (accessToken) {
      request.headers.Authorization = `${tokenType} ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Перехватчик для обработки обновления токена при 401 Unauthorized
baseService.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;

      // Попытка обновить токен только один раз
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        const newAccessToken = await refreshAccessToken();

        if (newAccessToken) {
          const tokenType = await getToken(TOKEN_TYPE) || DEFAULT_TOKEN_TYPE;

          // Повторно устанавливаем новый токен и отправляем запрос снова
          originalRequest.headers.Authorization = `${tokenType} ${newAccessToken}`;
          return baseService(originalRequest);
        } else {
          // Если обновить токен не удалось, удаляем оба токена
          await removeToken(ACCESS_TOKEN);
          await removeToken(REFRESH_TOKEN);
        }
      }
    }
    return Promise.reject(error);
  }
);
