import * as SecureStore from 'expo-secure-store';

/**
 * Сохраняет значение по заданному ключу.
 * @param key Ключ, по которому значение будет сохранено.
 * @param value Сохраняемое значение.
 */
export const saveToken = async (key: string, value: string) => {
  try {
    await SecureStore.setItemAsync(key, value);
    console.log('Токен сохранен успешно!');
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
    const value = await SecureStore.getItemAsync(key);
    if (value) {
      console.log('Токен успешно получен!');
    } else {
      console.warn('Токен не найден');
    }
    return value;
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
    await SecureStore.deleteItemAsync(key);
    console.log('Токен успешно удален!');
  } catch (e) {
    console.error('Ошибка при удалении токена:', e);
  }
};
