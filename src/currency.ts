
/**
 * Formats a number as euro (€) currency string with 2 decimal digits.
 * @param value The number to format.
 * @param locale User's prefered localization in 4 chars format like 'en-GB'. Default to Spanish 'es-ES'.
 * @returns An euro currency formated string.
 */
export function euroCurrencyFormatNumber(value: number, locale: string = 'es-ES'): string {
    return value.toLocaleString(locale, { style: 'currency', currency: 'EUR', useGrouping: true, maximumFractionDigits: 2, minimumFractionDigits: 2 });
}
