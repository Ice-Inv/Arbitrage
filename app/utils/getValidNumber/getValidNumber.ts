import { RegexpPattern } from "../../constants";

export function getValidNumber(value: string): number {
  if (!RegexpPattern.emptyOrNumberDotOrCommaNumber.test(value)) {
    throw 'Не соответствует типу числа, NaN';
  }

  if (value === '') {
    return 0;
  }

  const validValue = value.replace(',', '.').replace(/\.$/, '');

  return Number(validValue);
}
