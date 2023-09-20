import { addDays, differenceInDays, format } from 'date-fns';

type FormatType = 'numbers' | 'words';

export const calculateMathBirthday = (birthday: Date) => {
  const currentDate = new Date();
  // Calculate the difference in days between the current date and the birthday
  const daysSinceBirth = differenceInDays(currentDate, birthday);
  // Calculate the next power of ten
  const nextPowerOfTen = Math.ceil(Math.log10(daysSinceBirth + 1));
  // Calculate the next math birthday
  const nextMathBirthday = addDays(birthday, Math.pow(10, nextPowerOfTen));
  // Format the date with the format dd/MM/yyyy
  const formatInNumbers = formatDates('numbers', nextMathBirthday);
  // Format the date with the format dd MMMM yyyy
  const formatInWords = formatDates('words', nextMathBirthday);
  return {
    formatInNumbers,
    formatInWords,
  };
};

const formatDates = (type: FormatType, date: Date) => {
  switch (type) {
    case 'numbers':
      return format(date, 'dd/MM/yyyy');
    case 'words':
      return format(date, 'dd MMMM yyyy');
    default:
      return format(date, 'dd/MM/yyyy');
  }
};
