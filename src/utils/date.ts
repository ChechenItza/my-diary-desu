export const yearLowerBound = 2000;
export const yearHigherBound = 2100;

// TODO: use check manually instead of regex
const calendarDatePattern = /^\d{4}-(0?[1-9]|1[012])$/;
export function parseCalendarDate(date: string): Date | null {
  if (!calendarDatePattern.test(date)) return null;

  const [year, month] = date.split('-', 2).map((elem) => Number(elem));
  if (year < yearLowerBound || year > yearHigherBound) return null;

  return new Date(year, month - 1);
}

// TODO: use check manually instead of regex
const entryDatePattern =
  /^\d{4}-(0?[1-9]|1[012])-(([0]?[1-9])|([1-2][0-9])|(3[01]))$/;
export function parseEntryDate(date: string): string | null {
  if (!entryDatePattern.test(date)) return null;

  const [year, month, day] = date.split('-', 3).map((elem) => Number(elem));
  if (year < yearLowerBound || year > yearHigherBound) return null;

  return date;
}

export function toCalendarLink(date: Date): string {
  return `/${date.getFullYear()}-${date.getMonth() + 1}`;
}

export function toEntryLink(date: Date): string {
  return `/entry/${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
}

export function fromEntryDateToDate(date: string): Date {
  const [year, month, day] = date.split('-', 3).map((elem) => Number(elem));
  return new Date(year, month - 1, day);
}
