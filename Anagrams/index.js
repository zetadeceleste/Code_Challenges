// Detect if a string is an anagram of a given word and return true or false according the case
// e.g. 'pialdad', 'dialpad' should return true
// e.g. 'dod', 'dog' should return false
function isAnagram(stringToCheck, word) {
  if (typeof stringToCheck !== 'string' || typeof word !== 'string') {
    return false
  }

  if (stringToCheck.length !== word.length) {
    return false
  }

  // ** ChatGPT solution

  // const charCount1 = {}
  // const charCount2 = {}

  // // Llena los objetos con las ocurrencias de caracteres en las cadenas
  // for (let char of stringToCheck) {
  //   charCount1[char] = (charCount1[char] || 0) + 1
  // }
  // for (let char of word) {
  //   charCount2[char] = (charCount2[char] || 0) + 1
  // }

  // // Compara los objetos de recuento de caracteres
  // for (let char in charCount1) {
  //   if (charCount1[char] !== charCount2[char]) {
  //     return false
  //   }
  // }

  // return true

  // ** My test solution, not good because 'dod' and 'dog' returns true

  //   let result
  //   let stringToCheckArr = stringToCheck.split('')

  //   stringToCheckArr.find((c) => {
  //     result = word.indexOf(c) < 0 ? false : true
  //   })

  //   return result

  // ** My after-test solution
  // This solution makes sure that a repeated found letter won't be taken into account, e.g. 'dod' and 'dog'
  // Also if there's a discrepancy as a letter that isn't found on the original word, it will return false
  // BUT it's not so efficient, it has O(n) complexity

  const stringToCheckArr = stringToCheck.split('')
  const wordArr = word.split('')

  for (let i = 0; i < stringToCheckArr.length; i++) {
    let indexToCheck = wordArr.indexOf(stringToCheckArr[i])

    if (indexToCheck < 0) {
      return false
    } else {
      wordArr.splice(indexToCheck, 1)
    }
  }

  return wordArr.length === 0
}

// Detect if a string has 1 or more than one of anagrams of a given word,
// return an array with indexes of these anagrams if it's correspond
// e.g. 'dogddog' 'dog' should return [0, 1, 4]
function anagramIndexArray(stringToCheck, word) {
  if (typeof stringToCheck !== 'string' || typeof word !== 'string') {
    return false
  }

  const wordLength = word.length
  const resultArr = []

  for (let i = 0; i < stringToCheck.length; i++) {
    let auxWord = stringToCheck.slice(i, wordLength + i)

    if (isAnagram(auxWord, word)) {
      resultArr.push(i)
    }
  }

  return resultArr
}

module.exports = { isAnagram, anagramIndexArray }
