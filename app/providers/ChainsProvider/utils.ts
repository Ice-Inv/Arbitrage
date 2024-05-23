import { ChainsData, ChainsResponse, Course, NecessaryInformation, Options } from "../../types";

/**
 * Функция, которая формирует необходимые данные для цепочек
 * @param courses - шаги в цепочке
 * @returns Возвращает необходимые данные для построения цепочек
 */
export function getNecessaryInformation(courses: Course[]): NecessaryInformation {
  const necessaryInformation: NecessaryInformation = {
    currencyList: [],
    platformList: [],
    isOpen: true,
  }

  const result = courses.reduce((acc, course) => {
    const currencySet = new Set(acc.currencyList);
    const platformSet = new Set(acc.platformList);

    currencySet.add(course.currency_from);
    platformSet.add(course.platform_from);

    return {
      currencyList: Array.from(currencySet),
      platformList: Array.from(platformSet),
      isOpen: acc.isOpen && course.is_open,
    };
  }, necessaryInformation);

  return result;
}

/**
 * Функция, которая обрабатывает пришедшие данные по цепочкам с сервера
 * @param chainsResponse - данные, которые пришли с сервера по цепочкам
 * @returns Возвращает необходимую структуру данных цепочек
 */
export function getDataChainsFromResponse(chainsResponse: ChainsResponse[]): ChainsData[] {
  return chainsResponse.map((chainResponse) => {
    const necessaryInformation = getNecessaryInformation(chainResponse.courses);

    return {
      id: String(chainResponse.id),
      length: chainResponse.deal_cnt,
      residenceTime: chainResponse.creation_time,
      profit: {
        profit100: chainResponse.rate_100_percent,
        profit1000: chainResponse.rate_1000_percent,
        profit10000: chainResponse.rate_10000_percent,
      },
      avgProfit: {
        profit100: chainResponse.avg_rate100_percent,
        profit1000: chainResponse.avg_rate1000_percent,
        profit10000: chainResponse.avg_rate10000_percent,
      },
      currencyList: necessaryInformation.currencyList,
      platformList: necessaryInformation.platformList,
      steps: chainResponse.courses.map((course) => ({
        id: course.id,
        currencyStart: course.currency_from,
        currencyEnd: course.currency_to,
        platformStart: course.platform_from,
        platformEnd: course.platform_to,
        link: '',
        isOpen: course.is_open,
        bestPrice: course.best_price,
      })),
      isOpen: necessaryInformation.isOpen,
      updateTime: chainResponse.last_update,
    }
  });
}

export function getOptions(options: string[]): Options[] {
  return options.map((option) => ({
    label: option,
    value: option,
  }));
}
