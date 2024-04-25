/*

Symetric Matrix

Given a matrix, find out if it is a symetric matrix.

e.g.

[
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6]
]

Should return true

[
  [1, 2, 3],
  [2, 4, 5],
  [3, 5, 6]
]

*/

const isSymetricMatrix = (arr) => {
  if (typeof arr === 'string') {
    return 'Error, is not a valid matrix'
  }

  let arrLength = arr.length

  if (arrLength !== arr[0].length) {
    return 'Enter a square matrix'
  }

  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return false
      }
    }
  }

  return true
}

// Another solution

// const transposeMatrix = (arr) => {
//   if (typeof arr === 'string') {
//     return 'Error, you must enter a matrix'
//   }

//   let auxMatrix = []
//   let arrLength = arr.length

//   for (let i = 0; i < arrLength; i++) {
//     let auxArr = []
//     for (let j = 0; j < arrLength; j++) {
//       auxArr.push(arr[j][i])
//     }
//     auxMatrix.push(auxArr)
//   }

//   return auxMatrix
// }

module.exports = isSymetricMatrix
