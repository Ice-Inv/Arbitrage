import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

/**
 * Сохраняет значение по заданному ключу.
 * @param key Ключ, по которому значение будет сохранено.
 * @param value Сохраняемое значение.
 */
export const saveToken = async (key: string, value: string) => {
  try {
    if (Platform.OS === 'web') {
      window.localStorage.setItem(key, value);
    } else {
      await SecureStore.setItemAsync(key, value);
      console.log('Токен сохранен успешно!');
    }
  } catch (e) {
    console.error('Ошибка при сохранении токена:', e);
  }
};

/**
 * Получает значение по заданному ключу.
 * @param key Ключ, по которому нужно получить значение.
 * @returns Значение, сохраненное по ключу, или null.
 */
export const getToken = async (key: string): Promise<string | null> => {
  try {
    if (Platform.OS === 'web') {
      const value = window.localStorage.getItem(key);
      return value;
    } else {
      const value = await SecureStore.getItemAsync(key);
      console.log('Токен получен успешно!');
      return value;
    }
  } catch (e) {
    console.error('Ошибка при получении токена:', e);
    return null;
  }
};

/**
 * Удаляет значение по заданному ключу.
 * @param key Ключ, по которому значение будет удалено.
 */
export const removeToken = async (key: string) => {
  try {
    if (Platform.OS === 'web') {
      window.localStorage.removeItem(key);
    } else {
      await SecureStore.deleteItemAsync(key);
    }
  } catch (e) {
    console.error('Ошибка при удалении токена:', e);
  }
};
