const { isAnagram, anagramIndexArray } = require('../challenges/anagrams')

describe('anagrams', () => {
  test('should return true if a string is an anagram of another string', () => {
    expect(isAnagram('pialdad', 'dialpad')).toBe(true)
    expect(isAnagram('listen', 'silent')).toBe(true)
    expect(isAnagram('god', 'dog')).toBe(true)
  })

  test('should return false if a string is not an anagram of another string', () => {
    expect(isAnagram('dod', 'dog')).toBe(false)
    expect(isAnagram('doo', 'dog')).toBe(false)
    expect(isAnagram('tod', 'dog')).toBe(false)
    expect(isAnagram('godd', 'dog')).toBe(false)
  })

  test('should return an array with indexes of anagrams of a given word in a string', () => {
    expect(anagramIndexArray('dogddog', 'dog')).toEqual([0, 1, 4])
  })
})
