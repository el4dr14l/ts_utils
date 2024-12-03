"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var datetime_1 = require("../src/datetime");
var timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
var dateRegex = /^(0?[1-9]|[12][0-9]|3[01]) (\w{3})$/i;
var shortDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[-./](0?[1-9]|1[012])[-./](\d{2})$/;
var currentDate = new Date();
describe('Testing humanReadableDateTime(Date | string): ', function () {
    test('Full datetime format in Spanish', function () {
        expect((0, datetime_1.humanReadableDateTime)('2024-12-03T10:30:00', true)).toBe('mar, 03 dic 2024, 10:30');
    });
    test('Full datetime format in English', function () {
        expect((0, datetime_1.humanReadableDateTime)('2024-12-03T10:30:00', true, 'en')).toBe('Tue, Dec 03, 2024, 10:30');
    });
    test('Current DateTime shows the time only (HH:mm)', function () {
        expect((0, datetime_1.humanReadableDateTime)(currentDate)).toMatch(timeRegex);
    });
    test('Passed date current year shows day and month (DD MMM)', function () {
        expect((0, datetime_1.humanReadableDateTime)(new Date(currentDate.getFullYear(), 1, 1))).toMatch(dateRegex);
    });
    test('Passed date shows short date (DD/MM/YY)', function () {
        expect((0, datetime_1.humanReadableDateTime)(new Date(2000, 1, 1))).toMatch(shortDateRegex);
    });
    test('Future date current year shows day and month (DD MMM)', function () {
        expect((0, datetime_1.humanReadableDateTime)(new Date(currentDate.getFullYear(), 11, 31))).toMatch(dateRegex);
    });
    test('Future date shows day and month (DD/MM/YY)', function () {
        expect((0, datetime_1.humanReadableDateTime)(new Date(currentDate.getFullYear() + 2, 1, 1))).toMatch(shortDateRegex);
    });
    test('Current string DateTime shows the time only (HH:mm)', function () {
        var date = "".concat(currentDate.getFullYear(), "-").concat(currentDate.getMonth() + 1, "-").concat(currentDate.getDate(), " 13:45");
        expect((0, datetime_1.humanReadableDateTime)(date)).toMatch(timeRegex);
    });
    test('Passed string date shows day and month (DD/MM/YY)', function () {
        expect((0, datetime_1.humanReadableDateTime)('1/1/2000 13:54')).toMatch(shortDateRegex);
    });
    test('Future string date shows day and month (DD/MM/YY)', function () {
        expect((0, datetime_1.humanReadableDateTime)('1/1/2100 13:54')).toMatch(shortDateRegex);
    });
    test('Invalid string date', function () {
        expect((0, datetime_1.humanReadableDateTime)('43-43-2023')).toBe('Invalid Date');
    });
});
