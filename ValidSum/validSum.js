/*

Valid Sum

Escribir una función isValid que dado un número x:
  - Devuelva true si el numero se puede escribir como la suma de 3, 5 o ambas
  - Devuelva false en caso contrario

*/

const isValid = (x) => {
  if (typeof x !== "number") {
    return "Invalid number";
  }

  if (x % 1 === 0 && (x >= 3 || x >= 5)) {
    const isMultiple = (num) => num % 3 === 0 || num % 5 === 0;

    if (isMultiple(x)) {
      return true;
    }

    let aux = x;

    do {
      aux -= 8;
      if (isMultiple(aux)) {
        return true;
      }
    } while (aux > 0);
  }

  return false;
};

module.exports = isValid;


// Another algorithm for solution

// if (x % 3 === 0 || x % 5 === 0) return true;
// for (let i = 1; i < x; i++) {
//   for (let j = 1; j < x; j++) {
//     if (i * 3 + j * 5 > x) break;
//     if (i * 3 + j * 5 === x) {
//       return true;
//     }
//   }
// }
// return false;