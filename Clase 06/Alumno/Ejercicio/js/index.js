console.log('Hola')

// - La función deberá recibir como parámetro un indice y como segundo parámetro un Array y devolver una copia del mismo
//   pero con el elemento que esta en el indice eliminado.

var numbers = [ 1, 2, 3, 4, 5 ]

console.log('Original: ' + numbers)

var vector = deleteElement(2, numbers) // Devuelve un nuevo Array [1,2,4,5]

console.log('Modificado: ' + vector)

function deleteElement (index, vector) {
  var copiaVector = vector

  copiaVector.slice()

  copiaVector.splice(index, 1)

  return copiaVector
}
