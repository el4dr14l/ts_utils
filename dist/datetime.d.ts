/**
 * Formats a date and time value to human language, based on users language preferences.
 * If the given date is today, it shows the time.
 * If the given date is past or future from today, it shows the date.
 * E.g.: today: 13:45 - [HH:mm], date in the current year: 31 oct - [DD MMM], other dates: 31/10/99 - [DD/MM/YY].
 * For fullDateTime it returns something like: Tue, Dec 03, 2024, 10:30.
 * @param date The date to format.
 * @param fullDateTime Indicates to either show date and time or just date or time. Default to false.
 * @param lang User's prefered language expressed in 2 chars locale format. Default to Spanish (es).
 * @returns A string with the formatted date or time.
 */
export declare function humanReadableDateTime(date: Date | string, fullDateTime?: boolean, lang?: string): string;
