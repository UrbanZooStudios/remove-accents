/**
 * Removes diacritics (accent marks) from a string.
 * This approach uses Unicode normalization to decompose characters with accents
 * into their base character + accent mark, then removes the accent marks.
 *
 * @param {string} str - The string to process
 * @return {string} The string with accents removed
 */
export declare function removeAccents(str: string): string;
/**
 * Checks if a string contains any accented characters
 *
 * @param {string} str - The string to check
 * @return {boolean} True if the string contains accents
 */
export declare function hasAccents(str: string): boolean;
/**
 * Enhanced version that handles special cases in addition to standard diacritics
 *
 * @param {string} str - The string to process
 * @return {string} The string with accents and special cases transformed
 */
export declare function removeAccentsEnhanced(str: string): string;
