console.log('Init app clase 04')

// for (var i = 0; i < 3; i++) {
//   console.log('Hoy es martes!')
// }

// console.log('Hoy es martes!')
// console.log('Hoy es martes!')
// console.log('Hoy es martes!')

// function showMessage () {
//   console.log('Hoy es martes!')
// }

// showMessage()
// showMessage()
// showMessage()

// function showMessageThreeTimes () {
//   for (var i = 0; i < 3; i++) {
//     showMessage()
//   }
// }

// showMessageThreeTimes()

// showMessageThreeTimes()

// showMessageThreeTimes()

// function showHiMessage (name) {
//   console.log('Hola ' + name + ' como andas?')
//   console.log(name + ' todo bien?')
//   console.log('ATR gato')
//   console.log('----------------------')
// }

// showHiMessage('Juan')

// showHiMessage('Marcela')

// showHiMessage(undefined)

// var specialName = 'Felix'

// showHiMessage(specialName)

// function longMessage (firstName, lastName, age) {
//   if (firstName && lastName) {
//     console.log('Hola ' + firstName + ', ' + lastName + ' como andas?')
//   } else if (firstName) {
//     console.log('Hola ' + firstName + ' como andas?')
//   } else if (lastName) {
//     console.log('Hola Srx.' + lastName + ' como andas?')
//   }

//   if (age) {
//     console.log('Tú edad es ' + age)
//   }

//   console.log('----------------------')
// }

// longMessage('Valentina', 'Valoni', 22)
// longMessage('Adrián', undefined, 30)

// function showItemsInArray (items) {
//   if (items.length === 0) {
//     console.log('El array no tiene items')
//   } else if (items.length === 1) {
//     console.log('El array tiene un item')
//   } else if (items.length > 1) {
//     console.log('El array tiene ' + items.length + ' items')
//   }
// }

// showItemsInArray([ 1, 2, 3 ])

// showItemsInArray([ 1 ])

// showItemsInArray([])

// function powerSquare (number) {
//   var result = number * number

//   return result
// }

// console.log(powerSquare(2))

// var result = powerSquare(3)

// console.log(result)

// var result2 = powerSquare(result)

// console.log(result2)

// function powerSquare (number) {
//   var result = number * number

//   // return result
// }

// function showMessage (number1, number2) {
//   console.log('El cuadrado de ' + number1 + ' es ' + number2)
// }

// function showMessage2 (number1) {
//   console.log('El cuadrado es ' + number1)
// }

// var value = 3

// var result = powerSquare(value)

// showMessage(value, result)

// showMessage2(result)

// function hi1 () {
//   var firstNameCapitalLetters = 'ADRIAN'
//   console.log('Hola ', firstNameCapitalLetters)
// }

// function hi2 () {
//   var firstNameCapitalLetters = 'PEPE'
//   console.log('Hola ', firstNameCapitalLetters)
// }

// hi1()
// hi2()

// console.log(firstNameCapitalLetters)

// var message1

// message1 = 'Hola Juan'

// console.log(message1)

// function showMessage (message1) {
//   console.log(message1)
// }

// showMessage('Hola Adrián')

// console.log(message1)

// var items = [ 22, 30, 28, 25, 24, 44, 40, 25 ]

// var result = sumAges(items)

// console.log('La edad de todos sumada es ' + result)

// function sumAges (agesArray) {
//   var total = 0
//   var age
//   for (var i = 0; i < agesArray.length; i++) {
//     age = agesArray[i]
//     total = total + age
//   }
//   return total
// }

// var examResults = [ 7, 5, 6, 4, 3, 2, 8, 10, 2, 3, 8 ]

// var averageResult = calcAverage(examResults)

// console.log(averageResult)

// function calcAverage (agesArray) {
//   var total = 0
//   var age
//   for (var i = 0; i < agesArray.length; i++) {
//     age = agesArray[i]
//     total = total + age
//   }

//   var result = total / agesArray.length

//   return result
// }

// function calcAverage (agesArray) {
//   var total = 0
//   for (var i = 0; i < agesArray.length; i++) {
//     total = total + agesArray[i]
//   }

//   return total / agesArray.length
// }

// Object

// var firstName = 'Marcela'
// var lastName = 'Correa'
// var age = 29

// var student = {
//   lastName: 'Correa',
//   firstName: 'Marcela',
//   age: 29
// }

// console.log(student['firstName'])
// console.log(student['lastName'])
// console.log(student.age)

var students = [
  {
    lastName: 'Correa',
    firstName: 'Marcela',
    age: 30
  },
  {
    lastName: 'Adrián',
    firstName: 'Ferré',
    age: 30
  }
]

var result = getPosition(29, students)

console.log('La posición del estudiante de 29 años es ' + result)

function getPosition (age, studentsArray) {
  var student
  var total = 0
  for (var i = 0; i < studentsArray.length; i++) {
    student = studentsArray[i]

    if (student.age === age) {
      return i
    }
  }

  return -1
}
