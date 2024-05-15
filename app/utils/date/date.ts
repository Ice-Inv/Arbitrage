import { format } from 'date-fns';

enum FormatDate {
  DayMonthYear = 'dd.MM.yyyy'
}

export const formattedDate = (date: Date): string => format(new Date(), FormatDate.DayMonthYear);
