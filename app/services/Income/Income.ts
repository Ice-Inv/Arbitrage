import { baseService } from "../../api";
import { IncomeData, IncomeParams } from "../../types/Income";
import { toCamelCase } from "../../utils";
import { ROUTES } from "./routes";

/**
 * Функция установления новой точки
 * @param params параметры для установления новой точки
 */
async function postSetNewPoint(params: IncomeParams): Promise<void> {
  try {
    await baseService.post(ROUTES.SetPoint, {}, {
      params: {
        loop_id: params.loopId,
        input_value: params.inputValue,
        output_value: params.outputValue,
      }
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Функция для получения всех точек
 */
async function getPointList(): Promise<IncomeData[]> {
  try {
    const { data } = await baseService.get<IncomeData[]>(ROUTES.GetPoints);

    return toCamelCase(data) as IncomeData[];
  } catch (error) {
    throw error;
  }
}

export const incomeService = {
  postSetNewPoint,
  getPointList,
}
