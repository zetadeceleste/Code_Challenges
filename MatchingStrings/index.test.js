const matchingStrings = require('./index')

describe('matching strings', () => {
  test('should return an array with the number of times each query string appears in the list of strings', () => {
    const stringList = ['ab', 'ab', 'abc']
    const queries = ['ab', 'abc', 'bc']

    const result = matchingStrings(stringList, queries)

    expect(result).toEqual([2, 1, 0])
  })
})
