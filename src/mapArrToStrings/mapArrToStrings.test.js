const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
  it('Correct value', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
  });

  it('Correct value with different item types in array', () => {
    expect(mapArrToStrings([1, 2, 3, 'one', 'two', 'three', null, undefined])).toEqual(['1', '2', '3'])
  });

  it('Empty array with string values in array', () => {
    expect(mapArrToStrings(['one', 'two', 'three'])).toEqual([])
  });

  it('Empty array with empty array argument', () => {
    expect(mapArrToStrings([])).toEqual([])
  });

  it('Do not return another values in array except those we pass in argument', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  });
});