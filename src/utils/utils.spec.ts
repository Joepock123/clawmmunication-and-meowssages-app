import { formatNouns } from './utils';

describe('formatNouns', () => {
  it('should return an empty string when the array is empty', () => {
    expect(formatNouns([])).toBe('');
  });

  it('should return the cat name when the array contains one element', () => {
    expect(formatNouns(['Whiskers'])).toBe('Whiskers');
  });

  it('should return the cat names joined by "and" when the array contains two elements', () => {
    expect(formatNouns(['Whiskers', 'Garfield'])).toBe('Whiskers and Garfield');
  });

  it('should return the cat names joined by commas and "and" when the array contains more than three elements', () => {
    expect(formatNouns(['Whiskers', 'Garfield', 'Simba', 'Nala'])).toBe(
      'Whiskers, Garfield, Simba and Nala',
    );
  });

  it('should handle names with spaces correctly', () => {
    expect(formatNouns(['Mr. Fluffy', 'Garfield', 'Princess Mia'])).toBe(
      'Mr. Fluffy, Garfield and Princess Mia',
    );
  });

  it('should handle very large arrays of cat names', () => {
    const largeCatArray = [
      'Whiskers',
      'Garfield',
      'Simba',
      'Nala',
      'Tom',
      'Jerry',
    ];
    expect(formatNouns(largeCatArray)).toBe(
      'Whiskers, Garfield, Simba, Nala, Tom and Jerry',
    );
  });
});
