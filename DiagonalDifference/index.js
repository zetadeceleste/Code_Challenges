// Find difference between sums of two diagonals
// Given a matrix of n X n. The task is to calculate the absolute difference between the sums of its diagonal.

// Examples:
// Input : mat[][] = 11 2 4
//                    4 5 6
//                   10 8 -12
// Output : 15
// Sum of primary diagonal = 11 + 5 + (-12) = 4.
// Sum of secondary diagonal = 4 + 5 + 10 = 19.
// Difference = |19 - 4| = 15.

// Input : mat[][] = 10 2
//                    4 5
// Output : 9

function diagonalDifference(arr) {
  let auxArr1 = []
  let auxArr2 = []
  let aux = 0
  let arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[i][j] >= -100 && arr[i][j] <= 100) {
        if (i === j) {
          auxArr1.push(arr[i][j])
        }

        if (j === arrLength - 1 - aux && i === aux) {
          auxArr2.push(arr[i][j])
        }
      }
    }
    aux++
  }

  const sum = (arr) =>
    arr.reduce((sum, num) => {
      return sum + num
    }, 0)

  return Math.abs(sum(auxArr1) - sum(auxArr2))
}

module.exports = diagonalDifference
