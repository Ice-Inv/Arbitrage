import { format } from 'date-fns';

enum FormatDate {
  DayMonthYearHorseMinutes = 'dd.MM.yyyy hh:mm:ss',
  DayMonthYear = 'dd.MM hh:mm:ss',
}

export const formattedDate = (date: Date): string => format(date, FormatDate.DayMonthYear);

export const formattedFullYear = (date: Date): string => format(date, FormatDate.DayMonthYearHorseMinutes);
