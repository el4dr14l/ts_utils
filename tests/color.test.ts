import { isValidHexColor, fontContrastColor } from '../src/color';

const
    someText = 'some Text',         // false
    hex0 = '#0',                    // false
    hex00 = '#00',                  // false
    hexABC = '#ABC',                // true
    hexGGG = '#GGG',                // false
    hexABCD = '#ABCD',              // false
    hexABCFF = '#ABCFF',            // true
    hexABCHH = '#ABCHH',            // false
    hexHGIFF = '#HGIFF',            // false
    hexAABBCC = '#AABBCC',          // true
    hexGGHHII = '#GGHHII',          // false
    hexAABBCCF = '#AABBCCF',        // false
    hexAABBCCFF = '#AABBCCFF',      // true
    hexAABBCCGG = '#AABBCCGG',      // false
    hexAAZZCCGG = '#AAZZCCGG',      // false
    hexAABBCCDDE = '#AABBCCDDE',    // false
    hexEmptyString = '',            // false
    hexNegativeValues = '#-A-B-C',  // false
    hexHash = '#';                  // false

describe('Testing isValidHexColor(string): ', () => {
    test(`String "${someText}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(someText)).toBe(false);
    });

    test(`String "${hex0}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hex0)).toBe(false);
    });

    test(`String "${hex00}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hex00)).toBe(false);
    });

    test(`String "${hexABC}" does represent a valid hex color`, () => {
        expect(isValidHexColor(hexABC)).toBe(true);
    });

    test(`String "${hexGGG}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexGGG)).toBe(false);
    });

    test(`String "${hexABCD}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexABCD)).toBe(false);
    });

    test(`String "${hexABCFF}" does represent a valid hex color`, () => {
        expect(isValidHexColor(hexABCFF)).toBe(true);
    });

    test(`String "${hexABCHH}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexABCHH)).toBe(false);
    });

    test(`String "${hexHGIFF}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexHGIFF)).toBe(false);
    });

    test(`String "${hexAABBCC}" does represent a valid hex color`, () => {
        expect(isValidHexColor(hexAABBCC)).toBe(true);
    });

    test(`String "${hexGGHHII}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexGGHHII)).toBe(false);
    });

    test(`String "${hexAABBCCF}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexAABBCCF)).toBe(false);
    });

    test(`String "${hexAABBCCFF}" does represent a valid hex color`, () => {
        expect(isValidHexColor(hexAABBCCFF)).toBe(true);
    });

    test(`String "${hexAABBCCGG}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexAABBCCGG)).toBe(false);
    });

    test(`String "${hexAAZZCCGG}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexAAZZCCGG)).toBe(false);
    });

    test(`String "${hexAABBCCDDE}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexAABBCCDDE)).toBe(false);
    });

    test(`String "${hexEmptyString}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexEmptyString)).toBe(false);
    });

    test(`String "${hexNegativeValues}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexNegativeValues)).toBe(false);
    });

    test(`String "${hexHash}" does NOT represent a valid hex color`, () => {
        expect(isValidHexColor(hexHash)).toBe(false);
    });
});
//#endregion

//#region Test fontContrastColor(string)
const white = '#efefef',
    black = '#121212';

describe('Testing fontContrastColor(string): ', () => {

    test(`Color "#000" => font color: ${white}`, () => {
        expect(fontContrastColor('#000')).toBe(white);
    });

    test(`Color "#fff" => font color: ${black}`, () => {
        expect(fontContrastColor('#fff')).toBe(black);
    });

    test(`Color "#AABBGG" => font color: ${black}`, () => {
        expect(fontContrastColor('#AABBGG')).toBe(black);
    });

    test(`Color "#AABBGG" => font color: ${white}`, () => {
        expect(fontContrastColor('#AABBGG', true)).toBe(white);
    });

    test(`Color "#232323" => font color: ${white}`, () => {
        expect(fontContrastColor('#232323')).toBe(white);
    });

    test(`Color "#ddeecc" => font color: ${black}`, () => {
        expect(fontContrastColor('#ddeecc')).toBe(black);
    });

    test(`Color "${someText}" => font color: ${black}`, () => {
        expect(fontContrastColor(someText)).toBe(black);
    });

    test(`Color "${someText}" => font color: ${white}`, () => {
        expect(fontContrastColor(someText, true)).toBe(white);
    });
});
