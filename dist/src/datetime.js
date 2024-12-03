"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadableDateTime = humanReadableDateTime;
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
function humanReadableDateTime(date, fullDateTime, lang) {
    if (fullDateTime === void 0) { fullDateTime = false; }
    if (lang === void 0) { lang = 'es'; }
    if (!date)
        return '';
    var now = new Date();
    date = new Date(date);
    if (fullDateTime) {
        return date.toLocaleString([lang], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', hourCycle: 'h23', minute: '2-digit', weekday: 'short' });
    }
    // Check if the date is today
    if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
        // Display only hour and minute
        return date.toLocaleTimeString([lang], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
    }
    else if (date.getFullYear() === now.getFullYear()) {
        // Display day and month
        return date.toLocaleDateString([lang], { day: '2-digit', month: 'short' });
    }
    else {
        // Display day and month
        return date.toLocaleDateString([lang], { day: '2-digit', month: '2-digit', year: '2-digit' });
    }
}
