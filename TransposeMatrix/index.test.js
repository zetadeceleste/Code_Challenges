const transposeMatrix = require('./index')

describe('transpose matrix', () => {
  test('should return "Error, you must enter a matrix" if recieve a string', () => {
    const expected = 'Error, you must enter a matrix'
    const result = transposeMatrix('string')
    expect(expected).toBe(result)
  })
  test('should return [[1, 4, 7], [2, 5, 8], [3, 6, 9]] if recieve [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
    const expected = [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]
    const result = transposeMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
    expect(expected).toEqual(result)
  })
  test('should return [[1, 2], [3, 4]] if recieve [[1, 3], [2, 4]]', () => {
    const expected = [
      [1, 2],
      [3, 4],
    ]

    const result = transposeMatrix([
      [1, 3],
      [2, 4],
    ])
    expect(expected).toEqual(result)
  })
})
