
/**
 * Determines if the given string is a valid color in hexadecimal format (like: #00FFCC).
 * @param hexColor The color in hex format (#RGB, #RGBAA, #RRGGBB, #RRGGBBAA).
 * @returns True if the string is a valid hex color; false otherwise.
 */
export function isValidHexColor(hexColor: string): boolean {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})([A-Fa-f0-9]{2})?$/i;
    return hexColorRegex.test(hexColor);
}

/**
 * Calculates the proper contrast font for the given color.
 * @param hexColor The color in hex format (#RGB, #RGBAA, #RRGGBB, #RRGGBBAA).
 * @param defaultToLight A boolean value to indicate if the return color should be white or black when the given hexColor is not a valid color (true - for white; false - for black). Default is false.
 * @returns The contrast font color either as nearly white or nearly black.
 */
export function fontContrastColor(hexColor: string, defaultToLight: boolean = false): string {
    if (!hexColor || !isValidHexColor(hexColor))
        return defaultToLight ? '#efefef' : '#121212';

    // Normalize the hex value to 6 or 8 chars
    let cleanedHex = hexColor.replace(/^#/, '');
    cleanedHex = cleanedHex.length < 6 ? cleanedHex.substring(0, 3) : cleanedHex;

    let color = cleanedHex.length === 3 ?
        cleanedHex.split('').map(x => `${x}${x}`).join('') : cleanedHex;

    // get the red, green and blue values from the hex color.
    let r = parseInt(color.substring(0, 2), 16);
    let g = parseInt(color.substring(2, 4), 16);
    let b = parseInt(color.substring(4, 6), 16);

    // Counting the perceptive luminance (based on standard sRGB coefficients)
    let luminance = Math.pow(r / 255, 2.2) * 0.2126 +
        Math.pow(g / 255, 2.2) * 0.7152 +
        Math.pow(b / 255, 2.2) * 0.0722;

    // bright color -> dark font; dark color -> bright font
    return Math.pow(luminance, 0.678) < 0.5 ? "#efefef" : "#121212";
}
