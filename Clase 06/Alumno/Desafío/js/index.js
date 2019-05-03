console.log('Desafio.')

// - Crear una función que reciba como parámetros dos string y devuelva `true` en caso de encontrar una coincidencia
//   parcial y `false` en caso contrario, la función no tiene que distinguir mayúsculas de minúsculas.
//   El primer parámetro pasado a la función es el que se va a tratar de encontrarse dentro del segundo,
//   si alguno de los parámetros no es un string también deberá devolver `false`.

function includesText (busqueda, texto) {
  if (typeof busqueda !== 'string' && typeof texto !== 'string') return false

  var upperBusqueda = busqueda.toUpperCase()
  var upperText = texto.toUpperCase()

  if (upperText.indexOf(upperBusqueda) !== -1) return true
  else return false
}

console.log(includesText('PA', 'Patricia'))

console.log(includesText('G4', 'Fabricio'))

console.log(includesText('Stereo', 'Soda stereo'))
