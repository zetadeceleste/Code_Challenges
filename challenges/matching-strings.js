/*

Matching Strings

You are given a list of strings, stringList, and a list of queries, queries. Your task is to determine how many times each query string appears in the list of strings.

*/

function matchingStrings(stringList, queries) {
  let result = []

  for (let i = 0; i < queries.length; i++) {
    let count = 0
    for (let j = 0; j < stringList.length; j++) {
      if (queries[i] === stringList[j]) {
        count++
      }
    }

    result.push(count)
  }

  return result
}

module.exports = matchingStrings
