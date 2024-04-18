// Descripción del problema:

// Dada una matriz cuadrada de tamaño n x n, escribe una función llamada transposeMatrix que calcule la matriz transpuesta. La matriz transpuesta se obtiene intercambiando las filas y columnas de la matriz original.

// Ejemplo:

// Si tenemos la siguiente matriz:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// La matriz transpuesta sería:

// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

const transposeMatrix = (arr) => {
  if (typeof arr === 'string') {
    return 'Error, you must enter a matrix'
  }

  let auxMatrix = []
  let arrLength = arr.length

  for (let i = 0; i < arrLength; i++) {
    let auxArr = []
    for (let j = 0; j < arrLength; j++) {
      auxArr.push(arr[j][i])
    }
    auxMatrix.push(auxArr)
  }

  return auxMatrix
}

transposeMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])

module.exports = transposeMatrix
