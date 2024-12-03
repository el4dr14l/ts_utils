"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.euroCurrencyFormatNumber = euroCurrencyFormatNumber;
/**
 * Formats a number as euro (�) currency string with 2 decimal digits.
 * @param value The number to format.
 * @param locale User's prefered localization in 4 chars format like 'en-GB'. Default to Spanish 'es-ES'.
 * @returns An euro currency formated string.
 */
function euroCurrencyFormatNumber(value, locale) {
    if (locale === void 0) { locale = 'es-ES'; }
    return value.toLocaleString(locale, { style: 'currency', currency: 'EUR', useGrouping: true, maximumFractionDigits: 2, minimumFractionDigits: 2 });
}
