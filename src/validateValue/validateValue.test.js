const validateValue = require('./validateValue');

describe('validateValue', () => {
  it('Validation of value', () => {
    expect(validateValue(5)).toBe(true);
    expect(validateValue(-1)).toBe(false);
    expect(validateValue(101)).toBe(false);
    expect(validateValue(0)).toBe(true);
    expect(validateValue(100)).toBe(true);
  });
});