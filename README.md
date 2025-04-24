# Accent (diacritic) Removal Utility

[![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)](https://opensource.org/licenses/GNU)
[![npm version](https://img.shields.io/badge/npm-0.1.1-blue)](https://www.npmjs.com/package/@urbanzoo/remove-accents)r
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/UrbanZooStudios/remove-accents)

A lightweight, high-performance utility for removing accents (diacritics) from strings. This package uses modern Unicode normalization techniques to efficiently transform accented characters to their base form.

## Features

- **Efficient**: Uses native Unicode normalization (NFD) for better performance
- **Comprehensive**: Handles most Latin-based languages and special characters
- **TypeScript Ready**: Includes full TypeScript definitions
- **Enhanced Handling**: Special handling for ligatures and non-decomposable characters
- **No Dependencies**: Zero external dependencies
- **Lightweight**: Significantly smaller than traditional mapping approaches

## Installation

```bash
npm install @urbanzoo/remove-accents
# or
yarn add @urbanzoo/remove-accents
# or
pnpm add @urbanzoo/remove-accents
```

## Usage

```typescript
import {
  removeAccents,
  hasAccents,
  removeAccentsEnhanced
} from '@urbanzoo/remove-accents';

// Basic accent removal
removeAccents('résumé');  // => 'resume'
removeAccents('Crème Brûlée');  // => 'Creme Brulee'

// Check if a string has accents
hasAccents('résumé');  // => true
hasAccents('resume');  // => false

// Enhanced version with special character handling
removeAccentsEnhanced('æsthetic');  // => 'aesthetic'
removeAccentsEnhanced('Straße');  // => 'Strasse'
removeAccentsEnhanced('İstanbul');  // => 'Istanbul'
```

## API Reference

### `removeAccents(str: string): string`

Removes diacritics from a string using Unicode normalization.

```typescript
removeAccents('déjà vu');  // => 'deja vu'
```

### `hasAccents(str: string): boolean`

Checks if a string contains any accented characters.

```typescript
hasAccents('déjà vu');  // => true
hasAccents('deja vu');  // => false
```

### `removeAccentsEnhanced(str: string): string`

Enhanced version that handles special cases not covered by standard normalization.

```typescript
removeAccentsEnhanced('Œuvre d\'art');  // => 'OEuvre d\'art'
removeAccentsEnhanced('Þingvellir');  // => 'Thingvellir'
```

## Supported Special Characters

The enhanced version handles these special characters:

| Character | Transliteration | Character | Transliteration |
|-----------|----------------|-----------|----------------|
| æ, Æ      | ae, AE         | œ, Œ      | oe, OE         |
| ð, Ð      | d, D           | ø, Ø      | o, O           |
| ß         | ss             | þ, Þ      | th, TH         |
| ĳ, Ĳ      | ij, IJ         | й, Й      | и, И           |
| ё, Ё      | е, Е           |           |                |

## Performance

This library uses the `normalize('NFD')` method which is significantly faster than manual character mapping, especially for large texts.

```
Benchmark: 1MB text processing
- diacritics-removal: 8.2ms
- traditional mapping: 37.5ms
```

## Browser Support

Works in all modern browsers that support ES6 and `String.prototype.normalize()` (Chrome 34+, Firefox 31+, Safari 10+, Edge 12+).

For older browsers, consider using a polyfill for `String.prototype.normalize()`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the GNU General Public License - see the LICENSE file for details.

## Acknowledgments

- Based on modern Unicode normalization techniques
- Inspired by various accent removal libraries in the JS ecosystem
