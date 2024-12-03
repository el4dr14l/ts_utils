"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../src/color");
var someText = 'some Text', // false
hex0 = '#0', // false
hex00 = '#00', // false
hexABC = '#ABC', // true
hexGGG = '#GGG', // false
hexABCD = '#ABCD', // false
hexABCFF = '#ABCFF', // true
hexABCHH = '#ABCHH', // false
hexHGIFF = '#HGIFF', // false
hexAABBCC = '#AABBCC', // true
hexGGHHII = '#GGHHII', // false
hexAABBCCF = '#AABBCCF', // false
hexAABBCCFF = '#AABBCCFF', // true
hexAABBCCGG = '#AABBCCGG', // false
hexAAZZCCGG = '#AAZZCCGG', // false
hexAABBCCDDE = '#AABBCCDDE', // false
hexEmptyString = '', // false
hexNegativeValues = '#-A-B-C', // false
hexHash = '#'; // false
describe('Testing isValidHexColor(string): ', function () {
    test("String \"".concat(someText, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(someText)).toBe(false);
    });
    test("String \"".concat(hex0, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hex0)).toBe(false);
    });
    test("String \"".concat(hex00, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hex00)).toBe(false);
    });
    test("String \"".concat(hexABC, "\" does represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexABC)).toBe(true);
    });
    test("String \"".concat(hexGGG, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexGGG)).toBe(false);
    });
    test("String \"".concat(hexABCD, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexABCD)).toBe(false);
    });
    test("String \"".concat(hexABCFF, "\" does represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexABCFF)).toBe(true);
    });
    test("String \"".concat(hexABCHH, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexABCHH)).toBe(false);
    });
    test("String \"".concat(hexHGIFF, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexHGIFF)).toBe(false);
    });
    test("String \"".concat(hexAABBCC, "\" does represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexAABBCC)).toBe(true);
    });
    test("String \"".concat(hexGGHHII, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexGGHHII)).toBe(false);
    });
    test("String \"".concat(hexAABBCCF, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexAABBCCF)).toBe(false);
    });
    test("String \"".concat(hexAABBCCFF, "\" does represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexAABBCCFF)).toBe(true);
    });
    test("String \"".concat(hexAABBCCGG, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexAABBCCGG)).toBe(false);
    });
    test("String \"".concat(hexAAZZCCGG, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexAAZZCCGG)).toBe(false);
    });
    test("String \"".concat(hexAABBCCDDE, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexAABBCCDDE)).toBe(false);
    });
    test("String \"".concat(hexEmptyString, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexEmptyString)).toBe(false);
    });
    test("String \"".concat(hexNegativeValues, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexNegativeValues)).toBe(false);
    });
    test("String \"".concat(hexHash, "\" does NOT represent a valid hex color"), function () {
        expect((0, color_1.isValidHexColor)(hexHash)).toBe(false);
    });
});
//#endregion
//#region Test fontContrastColor(string)
var white = '#efefef', black = '#121212';
describe('Testing fontContrastColor(string): ', function () {
    test("Color \"#000\" => font color: ".concat(white), function () {
        expect((0, color_1.fontContrastColor)('#000')).toBe(white);
    });
    test("Color \"#fff\" => font color: ".concat(black), function () {
        expect((0, color_1.fontContrastColor)('#fff')).toBe(black);
    });
    test("Color \"#AABBGG\" => font color: ".concat(black), function () {
        expect((0, color_1.fontContrastColor)('#AABBGG')).toBe(black);
    });
    test("Color \"#AABBGG\" => font color: ".concat(white), function () {
        expect((0, color_1.fontContrastColor)('#AABBGG', true)).toBe(white);
    });
    test("Color \"#232323\" => font color: ".concat(white), function () {
        expect((0, color_1.fontContrastColor)('#232323')).toBe(white);
    });
    test("Color \"#ddeecc\" => font color: ".concat(black), function () {
        expect((0, color_1.fontContrastColor)('#ddeecc')).toBe(black);
    });
    test("Color \"".concat(someText, "\" => font color: ").concat(black), function () {
        expect((0, color_1.fontContrastColor)(someText)).toBe(black);
    });
    test("Color \"".concat(someText, "\" => font color: ").concat(white), function () {
        expect((0, color_1.fontContrastColor)(someText, true)).toBe(white);
    });
});
