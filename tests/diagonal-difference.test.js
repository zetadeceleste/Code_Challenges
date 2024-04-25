const diagonalDifference = require('../challenges/diagonal-difference')

describe('diagonal difference', () => {
  test('should return 0 if recieve [[1, 2], [3, 4]]', () => {
    const expected = 0
    const result = diagonalDifference([
      [1, 2],
      [3, 4],
    ])
    expect(expected).toBe(result)
  })
  test('should return 15 if recieve [[11, 2, 4], [4, 5, 6], [10, 8, -12]]', () => {
    const expected = 15
    const result = diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ])
    expect(expected).toBe(result)
  })
  test('should return 2 if recieve [[1, 2, 3], [4, 5, 6], [9, 8, 9]]', () => {
    const expected = 2
    const result = diagonalDifference([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9],
    ])
    expect(expected).toBe(result)
  })
  test('should return 9 if recieve [[10, 2], [4, 5]]', () => {
    const expected = 9
    const result = diagonalDifference([
      [10, 2],
      [4, 5],
    ])
    expect(expected).toBe(result)
  })
})
