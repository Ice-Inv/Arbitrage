import { baseService } from "../../api";
import { ROUTES } from "./routes";

/**
 * Функция для получения валют
 */
async function getCurrencyList(): Promise<string[]> {
  try {
    const { data } = await baseService.get<string[]>(ROUTES.Currencies);

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Функция для получения платформ
 */
async function getPlatformList(): Promise<string[]> {
  try {
    const { data } = await baseService.get<string[]>(ROUTES.Platforms);

    return data;
  } catch (error) {
    throw error;
  }
}

export const chainsService = {
  getCurrencyList,
  getPlatformList,
}
