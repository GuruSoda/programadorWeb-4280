// - Pedir la operación a realizar.
// - Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedir el segundo parámetro
//    hasta que ingrese un numero distinto de cero.

var operacion = prompt('Ingrese la operacion a realizar:')
var val1 = Number(prompt('Primer valor:'))

do {
  var val2 = Number(prompt('Segundo valor:'))
} while (operacion === 'div' && val2 === 0)

var mensaje = 'El resultado de '

switch (operacion) {
  case 'mul':
    mensaje += 'mul es ' + val1 * val2
    break
  case 'div':
    mensaje += 'div es ' + val1 / val2
    break
  case 'sum':
    mensaje += 'sumo es ' + (val1 + val2)
    break
  case 'res':
    mensaje += 'res es ' + (val1 - val2)
    break
}

console.log(mensaje)
