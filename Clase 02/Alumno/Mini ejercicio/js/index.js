// - Pedirle mediante `prompt` al usuario que ingrese un número, si el número es par mostrar un mensaje en consola indicando que es par, si no mostrar un mensaje indicando que es impar.

var numero = prompt('Ingrese un numero.')

// es par?
if (!(numero % 2)) {
  console.log('Es numero es par.')
} else {
  console.log('El numero es IMpar.')
}
