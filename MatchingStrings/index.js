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
