// - La función tiene que recibir como parámetros una key y un Array y convertir el Array en JSON para guardarlo en el localStorge.
//   La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni guardar nada.

var testList = [ 'CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS', 'PATRICIO' ]

setLocalList('studentsList', testList) // Guarda la lista en el localStorage en formato JSON

function setLocalList (llave, vector) {
  if (typeof llave !== 'string' && typeof vector !== 'array') return false

  var strVector = JSON.stringify(vector)

  localStorage.setItem(llave, strVector)
}
