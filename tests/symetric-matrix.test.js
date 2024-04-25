const isSymetricMatrix = require('../challenges/symetric-matrix')

describe('symetrix matrix', () => {
  test('should return "Error, is not a valid matrix" if receive "holis"', () => {
    const expected = 'Error, is not a valid matrix'
    const result = isSymetricMatrix('holis')
    expect(result).toBe(expected)
  })
  test('should return "Enter a square matrix" if receive "[1, 2, 3]"', () => {
    const expected = 'Enter a square matrix'
    const result = isSymetricMatrix([1, 2, 3])
    expect(result).toBe(expected)
  })
  test('should return true if receive "[[1, 2, 3], [2, 4, 5], [3, 5, 6]]"', () => {
    const expected = true
    const result = isSymetricMatrix([
      [1, 2, 3],
      [2, 4, 5],
      [3, 5, 6],
    ])
    expect(result).toBe(expected)
  })
  test('should return false if receive "[[1, 2, 2], [2, 4, 5], [3, 5, 6]]"', () => {
    const expected = false
    const result = isSymetricMatrix([
      [1, 2, 2],
      [2, 4, 5],
      [3, 5, 6],
    ])
    expect(result).toBe(expected)
  })
})
