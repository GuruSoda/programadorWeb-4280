console.log('Init app')

// var isRaining = false

// if (isRaining) {
//   console.log('Llevo paraguas')
// } else {
//   console.log('NO llevo paraguas')
// }

// var age = prompt('Ingresá tu edad')

// if (age > 18) {
//   console.log('Podés comprar un vinito')
// } else {
//   console.log('No, podés comprar un vinito')
// }

// var password = prompt('Ingresá tu contraseña')

// if (password === 1234) {
//   console.log('Contraseña correcta')
// } else {
//   console.log('Contraseña incorrecta')
// }

// var userName = prompt('Ingresa tu usuario')

// if (userName !== 'adrian@getsirena.com') {
//   console.log('Usuario incorrecto')
// }

// var ariPlaneMode = undefined // false

// if (!ariPlaneMode) {
//   console.log('Buscando redes')
// }

// console.log(ariPlaneMode)

// var value = 5

// var result = value % 2

// console.log(result) // 0.1

// var number2 = prompt('Ingresá un número')

// console.log(number2 % 3)

// Si da cero es multiple

// Cualquier otro número falso

// JS entiende el 0 como falso y cualquier otro número como verdadero

// if (!(number2 % 3)) {
//   console.log('El número es multiplo de tres')
// }

// var number = prompt('Ingresá un número')

// if (!(number % 2)) {
//   console.log('Es par')
// } else {
//   console.log('No es par')
// }

// && AND

// var number1 = prompt('Ingresá un número')

// if (number1 >= 5 && number1 <= 25) {
//   console.log('El valor está entre 5 y 25')
// }

// var userName = prompt('Ingresá tú usuario')

// var password = prompt('Ingresá tñu contraseña')

// if (userName === 'adrian@getsirena.com' && password === '1234') {
//   console.log('Ingresá al sitio')
// }

// var color = prompt('Ingresé un color')

// if (color === 'red' || color === 'white' && color === 'black') {
//   console.log('Alguno de los colores de River')
// }

// var color = prompt('Ingresé un color')

// switch (color) {
//   case 'red':
//     console.log('Rojo')
//     break

//   case 'white':
//     console.log('Blanco')
//     break

//   case 'blue':
//     console.log('Azul')
//     break

//   default:
//     console.log('Ingresó un color invalido')
//     break
// }

// var color = prompt('Ingresé un color')

// switch (color) {
//   case 'red':
//   case 'blue':
//     console.log('Es un color oscuro')
//     console.log('Y es lindo')
//     break

//   case 'yellow':
//   case 'rose':
//   case 'white':
//     console.log('Es un color claro')
//     break

//   default:
//     console.log('Ingresó un color invalido')
//     break
// }

var userName

var name1 = 'Pedro'

var name2 = 'Juan'

var message = 'Hola '

if (name1) {
  message = message + name1 + ' y '
}

if (name2) {
  message = message + name2
}

console.log(message)

if (userName) {
  if (password) {
    console.log('Ingresó')
  } else {
    console.log('No hay contraseña')
  }
} else {
  console.log('No hay usuario')
}
