// - Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos los números.
// - Probar la función.

var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]

console.log('El promedio es ' + promedio(examResults))

function promedio (vector) {
  var total = 0

  for (var i = 0; i < vector.length; i++) {
    total = total + vector[i]
  }

  return total / vector.length
}
