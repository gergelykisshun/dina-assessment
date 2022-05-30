import {test, expect} from '@jest/globals';
import phrasify from './phrasify';

test('pharisify for 7', () => {
    expect(phrasify('7')).toBe('seven');
});
test('pharisify for 42', () => {
    expect(phrasify('42')).toBe('forty-two');
});
test('pharisify for 1999', () => {
    expect(phrasify('1999')).toBe('one thousand nine hundred and ninety-nine');
});
test('pharisify for 2001', () => {
    expect(phrasify('2001')).toBe('two thousand and one');
});
test('pharisify for 17999', () => {
    expect(phrasify('17999')).toBe('seventeen thousand nine hundred and ninety-nine');
});
test('pharisify for 100001', () => {
    expect(phrasify('100001')).toBe('one hundred thousand and one');
});
test('pharisify for 342251', () => {
    expect(phrasify('342251')).toBe('three hundred and forty-two thousand two hundred and fifty-one');
});
test('pharisify for 1300420', () => {
    expect(phrasify('1300420')).toBe('one million three hundred thousand four hundred and twenty');
});
