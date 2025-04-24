// Improved diacritics removal utility
// Using Unicode normalization which is more efficient and comprehensive

/**
 * Removes diacritics (accent marks) from a string.
 * This approach uses Unicode normalization to decompose characters with accents
 * into their base character + accent mark, then removes the accent marks.
 *
 * @param {string} str - The string to process
 * @return {string} The string with accents removed
 */
export function removeAccents(str: string): string {
  // First normalize to NFD form (decomposed)
  // Then replace all combining diacritical marks (the accents)
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Checks if a string contains any accented characters
 *
 * @param {string} str - The string to check
 * @return {boolean} True if the string contains accents
 */
export function hasAccents(str: string): boolean {
  // Compare original string with normalized version
  // If different, there were accents
  return str !== removeAccents(str);
}

// Specific diacritic mappings for cases where Unicode normalization doesn't produce desired results
const specialCases = {
  'æ': 'ae',
  'Æ': 'AE',
  'œ': 'oe',
  'Œ': 'OE',
  'ð': 'd',
  'Ð': 'D',
  'ø': 'o',
  'Ø': 'O',
  'ß': 'ss',
  'þ': 'th',
  'Þ': 'TH',
  'ĳ': 'ij',
  'Ĳ': 'IJ',
  'й': 'и',
  'Й': 'И',
  'ё': 'е',
  'Ё': 'Е',
};

/**
 * Enhanced version that handles special cases in addition to standard diacritics
 *
 * @param {string} str - The string to process
 * @return {string} The string with accents and special cases transformed
 */
export function removeAccentsEnhanced(str: string): string {
  // First use standard accent removal
  const result = removeAccents(str);

  // Then handle special cases
  return result.replace(/[æÆœŒðÐøØßþÞĳĲйЙёЁ]/g, match => specialCases[match as keyof typeof specialCases] || match);
}
