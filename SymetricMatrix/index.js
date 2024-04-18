// Descripción del problema:

// Dada una matriz cuadrada de tamaño n x n, escribe una función llamada isSymmetricMatrix que determine si la matriz es simétrica o no. Una matriz es simétrica si es igual a su matriz transpuesta.

// Ejemplo:

// Si tenemos la siguiente matriz:

// [
//   [1, 2, 3],
//   [2, 4, 5],
//   [3, 5, 6]
// ]

// Esta matriz es simétrica porque es igual a su matriz transpuesta:

// [
//   [1, 2, 3],
//   [2, 4, 5],
//   [3, 5, 6]
// ]

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

module.exports = isSymetricMatrix
