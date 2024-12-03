"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currency_1 = require("../src/currency");
var currencyRegex = /^-?\d{1,3}(?:\.\d{3})*,?\d{2}[\s\u00A0]*\u20AC$/;
describe('Testing currencyFormatNumber(number)', function () {
    test('Number 10.00 shown as 10,00 �', function () {
        expect((0, currency_1.euroCurrencyFormatNumber)(10.00)).toMatch(currencyRegex);
    });
    test('Number 110.010 shown as 110,01 �', function () {
        expect((0, currency_1.euroCurrencyFormatNumber)(110.010)).toMatch(currencyRegex);
    });
    test('Number 24 shown as 24,00 �', function () {
        expect((0, currency_1.euroCurrencyFormatNumber)(24)).toMatch(currencyRegex);
    });
    test('Number -54000.87 shown as -54,000.87 �', function () {
        expect((0, currency_1.euroCurrencyFormatNumber)(-54000.87)).toMatch(currencyRegex);
    });
});
