// - La función tiene que recibir como parámetro una key y buscar en el localStorage por esa key devolviendo un objeto de JavaScript,
//   si no existe el elemento debe devolver un Array vacío. La función tiene que validar los parámetros que recibe,
//   en caso de que alguno sea incorrecto no debe romper ni borrar nada.

var studentsList = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...]

console.log(studentsList)

function getLocalList (llave) {
  if (typeof llave !== 'string') return []

  var valorStorage = localStorage.getItem(llave)

  if (!valorStorage) return []

  var vectorValorStorage = JSON.parse(valorStorage)

  if (!vectorValorStorage.isArray) return []

  return vectorValorStorage
}
