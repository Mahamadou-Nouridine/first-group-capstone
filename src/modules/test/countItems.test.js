import itemCounter from '../itemCounter.js';

describe('This test should return the correct number of items from itemCounter function', () => {
  test('should return the length of the data array', () => {
    const check = ['a', 'b', 'c', 'd', 'e'];

    const result = itemCounter(check);

    expect(result).toBe(5);
  });
});
