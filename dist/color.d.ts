/**
 * Determines if the given string is a valid color in hexadecimal format (like: #00FFCC).
 * @param hexColor The color in hex format (#RGB, #RGBAA, #RRGGBB, #RRGGBBAA).
 * @returns True if the string is a valid hex color; false otherwise.
 */
export declare function isValidHexColor(hexColor: string): boolean;
/**
 * Calculates the proper contrast font for the given color.
 * @param hexColor The color in hex format (#RGB, #RGBAA, #RRGGBB, #RRGGBBAA).
 * @param defaultToLight A boolean value to indicate if the return color should be white or black when the given hexColor is not a valid color (true - for white; false - for black). Default is false.
 * @returns The contrast font color either as nearly white or nearly black.
 */
export declare function fontContrastColor(hexColor: string, defaultToLight?: boolean): string;
