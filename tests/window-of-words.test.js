const windowOfWords = require('../challenges/window-of-words')

const wordsList1 = [
  [['I', 'am', 'an', 'interesting'], 'solving'],
  [['am', 'solving', 'interesting', 'NLP'], 'an'],
  [['solving', 'an', 'NLP', 'problem'], 'interesting'],
]

const wordsList2 = [['I', 'Ironman'], 'am']

describe('window of words', () => {
  test("should return 'Invalid input' if recieves words = [] and c = 2", () => {
    const expected = 'Invalid input'
    const result = windowOfWords([], 2)
    expect(result).toStrictEqual(expected)
  })
  test("should return 'Invalid input' if recieves words = ['I', 'am', 'Ironman'] and c = 0", () => {
    const expected = 'Invalid input'
    const result = windowOfWords(['I', 'am', 'Ironman'], 0)
    expect(result).toStrictEqual(expected)
  })
  test("should return wordList1 if recieves words = ['I', 'am', 'solving', 'an', 'interesting', 'NLP', 'problem'] and c = 2", () => {
    const expected = wordsList1
    const result = windowOfWords(
      ['I', 'am', 'solving', 'an', 'interesting', 'NLP', 'problem'],
      2
    )
    expect(result).toStrictEqual(expected)
  })
  test("should return wordsList2 if recieves words = ['I', 'am', 'Ironman'] and c = 1", () => {
    const expected = wordsList2
    const result = windowOfWords(['I', 'am', 'Ironman'], 1)
    expect(result).toStrictEqual(expected)
  })
})
