import { euroCurrencyFormatNumber } from '../src/currency';

const currencyRegex = /^-?\d{1,3}(?:\.\d{3})*,?\d{2}[\s\u00A0]*\u20AC$/;
describe('Testing currencyFormatNumber(number)', () => {
    test('Number 10.00 shown as 10,00 €', () => {
        expect(euroCurrencyFormatNumber(10.00)).toMatch(currencyRegex);
    });

    test('Number 110.010 shown as 110,01 €', () => {
        expect(euroCurrencyFormatNumber(110.010)).toMatch(currencyRegex);
    });

    test('Number 24 shown as 24,00 €', () => {
        expect(euroCurrencyFormatNumber(24)).toMatch(currencyRegex);
    });

    test('Number -54000.87 shown as -54,000.87 €', () => {
        expect(euroCurrencyFormatNumber(-54000.87)).toMatch(currencyRegex);
    });
});
