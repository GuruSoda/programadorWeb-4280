// - Usar el form que se encuentra junto a este ejercicio y validar que la edad ingresada por el usuario cuando
// aprieta el botón 'Validar edad' y mostrar un mensaje en consola cuando el usuario es mayor de edad y otro cuando es menor.

var boton = document.getElementById('button')

boton.onclick = validarEdad

function validarEdad () {
  var inputAge = document.getElementById('age')

  if (Number(inputAge.value) >= 18) {
    console.log('El usuario es Mayor de edad.')
  } else {
    console.log('El usuario es Menor de edad')
  }
}
