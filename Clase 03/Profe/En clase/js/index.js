// Comentario
console.log('Estoy aquí!')

// var count = 1

// console.log(count)

// count = count + 1 // Count = 2

// console.log(count)

// count = count + 1 // Count = 3

// console.log(count)

// console.log('Empezó')

// var count = 0

// while (count < 100) {
//   console.log(count)

//   count = count + 5
// }

// console.log('Terminó')

// console.log('Empezó')

// var password = prompt('Ingresá contraseña')

// while (password !== '1234') {
//   console.log(password)
//   password = prompt('Ingresá contraseña')
// }

// console.log(password)

// console.log('Terminó')

// console.log('Empezó')

// var password1 = prompt('Ingresá contraseña')

// var password2 = prompt('Ingresá la misma contraseña')

// while (password2 !== password1) {
//   password2 = prompt('Volvé a ingresar contraseña')
// }

// console.log('Terminó')

// console.log('Empezó')

// var password

// do {
//   password = prompt('Ingresá contraseña')
// } while (password !== '1234')

// console.log('Terminó')

// For

// var value = prompt('Ingresá un valor entre 0 y 100')

// var parsedValue = parseInt(value, 10)

// for (var count = 0; count <= 100; count++) {
//   console.log(count)
//   if (parsedValue === count) {
//     break
//   }
// }

// var train = [ 2, 4, 7, 'A' ]

// var names = [ 'Marcela', 'Vale', undefined, 'Fede' ]

// console.log(names.length)

// for (var i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// for (var count = 0; count <= 30; count++) {
//   if (count % 2) {
//     continue
//   }
//   console.log(count)
// }

// var firstName = prompt('Nombre?')

// var lastName = prompt('Apellido?')

// console.log(firstName[0], lastName[0])

// var firstName = prompt('Nombre?')

// var value

// for (var i = 0; i < firstName.length; i++) {
//   value = firstName[i]
//   console.log(value)
// }

// Trabajando re tranquilo local

// Test

// Mini ejercicio

// var password

// do {
//   password = prompt('Ingresá contraseña')
// } while (!password)

// var daysOfTheWeek = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sábado',
//   'Sabado',
//   'Domingo',
//   'Pato'
// ]

// for (var i = 0; i < daysOfTheWeek.length; i++) {
//   var day = daysOfTheWeek[i]
//   var message = 'El '

//   // TODO: Ver publicidad día Osvaldo
//   switch (day) {
//     case 'Lunes':
//     case 'Martes':
//     case 'Miercoles':
//     case 'Miércoles':
//     case 'Jueves':
//     case 'Viernes':
//       message = message + day + ' es día de semana'
//       break
//     case 'Sabado':
//     case 'Sábado':
//     case 'Domingo':
//       message = message + day + ' es día de fin de semana'
//       break
//     default:
//       message = message + day + ' no es un día válido'
//       break
//   }

//   console.log(message)
// }

var operation = prompt('Ingresá la operación')

var number1 = prompt('Ingrese el primer número')
var number2 = prompt('Ingrese el segundo número')

var parsedNumber1 = parseFloat(number1, 10)
var parsedNumber2 = parseFloat(number2, 10)

switch (operation) {
  case 'mul':
  case '*':
    console.log(
      'El resultado de la multiplicación es ' + parsedNumber1 * parsedNumber2
    )
    break
  case 'sum':
  case '+':
    console.log('El resultado de la suma es ' + (parsedNumber1 + parsedNumber2))
    break
  case 'res':
  case '-':
    console.log(
      'El resultado de la resta es ' + (parsedNumber1 - parsedNumber2)
    )
    break
  case 'div':
  case '/':
    while (parsedNumber2 === 0) {
      number2 = prompt(
        'El dividendo no puede ser cero, ingrese el segundo de número de nuevo'
      )
      parsedNumber2 = parseFloat(number2, 10)
    }
    console.log(
      'El resultado de la división es ' + parsedNumber1 / parsedNumber2
    )
    break
  default:
    console.log('Operación no valida')
    break
}

for (var i = 0; i < 10; i++) {
  console.log(i)
}
