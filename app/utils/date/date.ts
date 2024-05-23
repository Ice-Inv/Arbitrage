import { format } from 'date-fns';

enum FormatDate {
  DayMonthYear = 'dd.MM.yyyy hh:mm'
}

export const formattedDate = (date: Date): string => format(new Date(), FormatDate.DayMonthYear);
