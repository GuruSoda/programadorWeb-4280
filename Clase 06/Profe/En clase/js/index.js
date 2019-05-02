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

// var text =
//   'El amor juega a inventarse, huye de sí mismo para volver en su espiral sobrecogedora, los senos cantan de otro modo, la boca besa más profundamente o como de lejos, y en un momento donde antes había como cólera y angustia es ahora el juego puro, el retozo increíble, o al revés, a la hora en que antes se caía en el sueño, el balbuceo de dulces cosas tontas, ahora hay una tensión, algo incomunicado pero presente que exige incorporarse, algo como una rabia insaciable. Sólo el placer en su aletazo último es el mismo; antes y después el mundo se ha hecho pedazos y hay que nombrarlo de nuevo, dedo por dedo, labio por labio, sombra por sombra'

// var textUpeerCase = text.toUpperCase()

// var searchText = prompt('Ingresa un texto')

// var searchTextUpperCase = searchText.toUpperCase()

// if (textUpeerCase.indexOf(searchTextUpperCase) !== -1) {
//   console.log('La palabra ' + searchText + ' existe en el texto')
// }

// - 6.3	Validación de Array mediante `Array.isArray()`

// var colors = [ 'red', 'blue', 'pink' ]

// if (Array.isArray(colors)) {
//   console.log('Es un Array')
// } else {
//   console.log('No es un Array')
// }

// - 6.4	Métodos de Array
//    - `length`
//    - `toString`

// var colors = [ 'red', 'blue', 'pink' ]

// if (Array.isArray(colors)) {
//   console.log(colors.toString())
// }

//    - `join`

// var colors = [ 'red', 'blue', 'pink' ]

// if (Array.isArray(colors)) {
//   console.log(colors.join(' '))
//   console.log(colors)
// }

//    - `push`

// var colors = [ 'red', 'blue', 'pink' ]

// console.log(colors)

// colors.push('grey')

// colors[1] = 'white'

// console.log(colors)

//    - `sort`

// var students = [
//   {
//     firstName: 'Juan',
//     lastName: 'Pérez',
//     dni: 1234,
//     email: 'juan@gmail.com'
//   },
//   {
//     firstName: 'Ana',
//     dni: 1233,
//     email: 'ana@gmail.com'
//   },
//   {
//     firstName: 'Pedro',
//     lastName: 'Mármol',
//     dni: 1222,
//     email: 'pedro@gmail.com'
//   }
// ]

// console.log(students.sort(compare))

// function compare (studentA, studentB) {
//   if (studentA.email < studentB.email) {
//     return -1
//   }
//   if (studentA.email > studentB.email) {
//     return 1
//   }
//   // a debe ser igual b
//   return 0
// }

//    - `slice`

// var colors = [ 'red', 'blue', 'pink' ]

// var colorsCopy = colors.slice()

// colorsCopy.push('grey')

// console.log(colors)

// console.log(colorsCopy)

//    - `splice`

// var colors = [ 'red', 'blue', 'pink' ]

// var userColor = prompt('Ingresá el color')

// var index = colors.indexOf(userColor)

// if (index !== -1) {
//   colors.splice(index, 1)
// }

// console.log(colors)

// var numbers = [1,2,3,4,5]

// var numbersUpdated = numbers.slice()

// function deleteElement (a, b){
//     numbersUpdated.splice (a, b)
//     return numbersUpdated
// }
// console.log(numbers)

// console.log(deleteElement(2, 1))

// var numbers = [ 1, 2, 3, 4, 5 ]

// var numbersCopy = numbers.slice()

// numbers.push(98)

// console.log(numbers)
// console.log(numbersCopy)
// console.log(numbers === numbersCopy)

// var text = 'Pato'

// var textCopy = text

// text = 'Ganso'

// console.log(text)
// console.log(textCopy)
// console.log(text === textCopy)

function deleteElement (index, array) {
  var arrayCopy = array.slice()

  arrayCopy.splice(index, 1)

  return arrayCopy
}

var newNumbers = deleteElement(2, numbers) // Devuelve un nuevo Array [1,2,4,5]

console.log(numbers)
console.log(newNumbers)
