import { describe, it, expect } from 'vitest';
import { removeAccents, hasAccents, removeAccentsEnhanced } from '../index.js';

describe('removeAccents', () => {
  it('should remove simple diacritics', () => {
    expect(removeAccents('é')).toBe('e');
    expect(removeAccents('à')).toBe('a');
    expect(removeAccents('ç')).toBe('c');
    expect(removeAccents('ñ')).toBe('n');
    expect(removeAccents('ü')).toBe('u');
  });

  it('should handle strings with multiple accented characters', () => {
    expect(removeAccents('résumé')).toBe('resume');
    expect(removeAccents('Crème Brûlée')).toBe('Creme Brulee');
    expect(removeAccents('Mötley Crüe')).toBe('Motley Crue');
    expect(removeAccents('déjà vu')).toBe('deja vu');
  });

  it('should not modify strings without accents', () => {
    expect(removeAccents('hello')).toBe('hello');
    expect(removeAccents('HELLO')).toBe('HELLO');
    expect(removeAccents('Hello, World!')).toBe('Hello, World!');
    expect(removeAccents('1234567890')).toBe('1234567890');
  });

  it('should handle empty strings', () => {
    expect(removeAccents('')).toBe('');
  });

  it('should handle strings with multiple types of diacritics', () => {
    expect(removeAccents('Příliš žluťoučký kůň úpěl ďábelské ódy')).toBe('Prilis zlutoucky kun upel dabelske ody');
    expect(removeAccents('El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío')).toBe('El pinguino Wenceslao hizo kilometros bajo exhaustiva lluvia y frio');
  });
});

describe('hasAccents', () => {
  it('should return true for strings with accents', () => {
    expect(hasAccents('é')).toBe(true);
    expect(hasAccents('résumé')).toBe(true);
    expect(hasAccents('Crème Brûlée')).toBe(true);
    expect(hasAccents('déjà vu')).toBe(true);
  });

  it('should return false for strings without accents', () => {
    expect(hasAccents('hello')).toBe(false);
    expect(hasAccents('HELLO')).toBe(false);
    expect(hasAccents('Hello, World!')).toBe(false);
    expect(hasAccents('1234567890')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(hasAccents('')).toBe(false);
  });

  it('should detect various types of diacritics', () => {
    expect(hasAccents('á')).toBe(true);
    expect(hasAccents('è')).toBe(true);
    expect(hasAccents('ñ')).toBe(true);
    expect(hasAccents('ö')).toBe(true);
    expect(hasAccents('ç')).toBe(true);
    expect(hasAccents('ű')).toBe(true);
  });
});

describe('removeAccentsEnhanced', () => {
  it('should handle standard diacritic removal', () => {
    expect(removeAccentsEnhanced('é')).toBe('e');
    expect(removeAccentsEnhanced('résumé')).toBe('resume');
    expect(removeAccentsEnhanced('Crème Brûlée')).toBe('Creme Brulee');
  });

  it('should handle special case characters', () => {
    expect(removeAccentsEnhanced('æ')).toBe('ae');
    expect(removeAccentsEnhanced('Æ')).toBe('AE');
    expect(removeAccentsEnhanced('œ')).toBe('oe');
    expect(removeAccentsEnhanced('Œ')).toBe('OE');
    expect(removeAccentsEnhanced('ð')).toBe('d');
    expect(removeAccentsEnhanced('Ð')).toBe('D');
    expect(removeAccentsEnhanced('ø')).toBe('o');
    expect(removeAccentsEnhanced('Ø')).toBe('O');
    expect(removeAccentsEnhanced('ß')).toBe('ss');
    expect(removeAccentsEnhanced('þ')).toBe('th');
    expect(removeAccentsEnhanced('Þ')).toBe('TH');
    expect(removeAccentsEnhanced('ĳ')).toBe('ij');
    expect(removeAccentsEnhanced('Ĳ')).toBe('IJ');
    expect(removeAccentsEnhanced('й')).toBe('и');
    expect(removeAccentsEnhanced('Й')).toBe('И');
    expect(removeAccentsEnhanced('ё')).toBe('е');
    expect(removeAccentsEnhanced('Ё')).toBe('Е');
  });

  it('should handle mixed standard and special case characters', () => {
    expect(removeAccentsEnhanced('Æsthetic résumé')).toBe('AEsthetic resume');
    expect(removeAccentsEnhanced('Søren Kierkegård')).toBe('Soren Kierkegard');
    expect(removeAccentsEnhanced('Einstürzende Neubauten & Björk')).toBe('Einsturzende Neubauten & Bjork');
    expect(removeAccentsEnhanced('François et Œdipe')).toBe('Francois et OEdipe');
  });

  it('should handle an empty string', () => {
    expect(removeAccentsEnhanced('')).toBe('');
  });

  it('should not modify non-accent characters', () => {
    expect(removeAccentsEnhanced('The quick brown fox jumps over the lazy dog')).toBe('The quick brown fox jumps over the lazy dog');
    expect(removeAccentsEnhanced('!@#$%^&*()_+-=[]{}|;:",./<>?')).toBe('!@#$%^&*()_+-=[]{}|;:",./<>?');
  });

  it('should properly handle different languages', () => {
    // Russian with special character handling
    expect(removeAccentsEnhanced('Привёт мир, добрый день')).toBe('Привет мир, добрыи день');

    // French with special character and regular accents
    expect(removeAccentsEnhanced('Œuvre d\'art français')).toBe('OEuvre d\'art francais');

    // Icelandic with special characters
    expect(removeAccentsEnhanced('Þetta er íslenska')).toBe('THetta er islenska');

    // German with special character
    expect(removeAccentsEnhanced('Straße')).toBe('Strasse');
  });
});
