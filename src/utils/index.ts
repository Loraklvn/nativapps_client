export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ');
};

type FormatToMoneyOpts = {
  minimumFractionDigits?: number;
};

export const formatToMoney = (
  num: number,
  opts: FormatToMoneyOpts = {}
): string => {
  const { minimumFractionDigits = 2 } = opts;
  return new Intl.NumberFormat(undefined, { minimumFractionDigits }).format(
    num
  );
};

export const firstLetterToUpperCase = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1).toLocaleLowerCase();
};

export const getDateTimeHHMM = (date: string): string => {
  const time = new Date(date).toLocaleString().split(' ');
  const upTo = time[1].lastIndexOf(':') + 1;
  const HHMM = time[1].slice(0, upTo);

  return `${HHMM}${time[2]}`;
};
