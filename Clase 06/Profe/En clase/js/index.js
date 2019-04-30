console.log('Estamos de paro!')

// // var firstName = 'Pedro'

// var firstName = new String('Pedro')

// console.log(firstName)
// console.log(firstName.length)

// // var numbers = [1,2,3]

// var numbers = new Array(1, 2, 3)

// console.log(numbers)
// console.log(numbers.length)

// # 6 Métodos de String y Array [Modulo B]

// - 6.1	Validación de tipo de valor mediante `typeof`

// var firstName = 'Pato'

// if (typeof firstName === 'string') {
//   console.log('Estoy seguro que es un String')

//   console.log(
//     'La palabra ' + firstName + ' tiene ' + firstName.length + ' caracteres'
//   )
// } else {
//   console.log('Estoy seguro que NO es un String')
// }

// - 6.2	Métodos de String

//    - `length`
// var firstName = 'Pato'

// console.log(
//   'La palabra ' + firstName + ' tiene ' + firstName.length + ' caracteres'
// )

//    - `indexOf`

// var email = prompt('Ingresá tu email')

// while (email.indexOf('@') === -1 || email.indexOf(' ') !== -1) {
//   email = prompt(
//     'Ingresá tu gil email, y poné un arroba al menos y sin espacios'
//   )
// }

// var text = 'Soy un Pato muy feliz en patolandia!'

// var searchText = prompt('Ingresá un texto')

// if (text.indexOf(searchText) !== -1) {
//   console.log(
//     'La palabra ' +
//       searchText +
//       ' se encuentra en la posición ' +
//       text.indexOf(searchText)
//   )
// } else {
//   console.log('La palabra ingresada no existe')
// }

//    - `toLowerCase`

// var text = 'SOY EL MEJOR PATO'

// var textLower = text.toLowerCase()

// console.log(textLower)

//    - `toUpperCase`

// var text = 'Soy el mejor Pato'

// var textUpper = text.toUpperCase()

// if (textUpper.indexOf('PATO') !== -1) {
//   console.log(
//     'Exite la palabra PATO, no importa si es en mayúsculas o minúsculas'
//   )
// }

// console.log(textUpper)

//    - `split`

// var str = '1,2,3,4,5,6'

// var res = str.split(',')

// console.log(res)

// - 6.3	Validación de Array mediante `Array.isArray()`
// - 6.4	Métodos de Array
//    - `length`
//    - `toString`
//    - `push`
//    - `join`
//    - `slice`
//    - `splice`
//    - `sort`
