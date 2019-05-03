// # 7 SesionStorage y LocalStorage [Modulo B]

// - 7.1	¿Qué es el sesionStorage y el localStorage?
//    - `setItem(key, value)`
//    - `getItem(key)`
//    - `removeItem(key)`
// - 7.2	¿Qué es un JSON?
// - 7.3	`JSON.stringify()` y `JSON.parse()`

// console.log('Json vs Freddy')

// var kitty = {
//   name: 'Princess Caroline',
//   age: 1.5,
//   colors: [ 'white', 'grey', 'coffee' ],
//   male: false,
//   owner: {
//     firstName: 'Camila',
//     lastName: 'Rubin'
//   }
// }

// // console.log(kitty.owner.firstName)

// console.log(kitty.name)

// var stingyKitty = JSON.stringify(kitty)

// // console.log(stingyKitty)

// console.log(stingyKitty)

// var parsedKitty = JSON.parse(stingyKitty)

// console.log(parsedKitty)

// var localFavoriteDessert = localStorage.getItem('favoriteDessert')

// var favoriteDessert

// if (!localFavoriteDessert) {
//   favoriteDessert = prompt('Ingresá tu postre preferido')

//   localStorage.setItem('favoriteDessert', favoriteDessert)
// } else {
//   favoriteDessert = localFavoriteDessert
// }

// var message = 'Tu postre preferido es ' + favoriteDessert

// var kitty = {
//   name: 'Princess Caroline',
//   age: 1.5,
//   colors: [ 'white', 'grey', 'coffee' ],
//   male: false,
//   owner: {
//     firstName: 'Camila',
//     lastName: 'Rubin'
//   }
// }

// Levanto del LS

var localKitty = localStorage.getItem('kittyHouse')

// Convierto a JS

var parsedKitty = JSON.parse(localKitty)

// Changes Add color

// var newColor = prompt('Ingresé un color')

// parsedKitty.colors.push(newColor)

// Changes Delete color

// var newColor = prompt('Ingresé un color')

// var colorIndex = parsedKitty.colors.indexOf(newColor)

// if (colorIndex !== -1) {
//   parsedKitty.colors.splice(colorIndex, 1)
// }

// Change Modify color

var newColor = prompt('Ingresé un color a eliminar')

var colorIndex = parsedKitty.colors.indexOf(newColor)

if (colorIndex !== -1) {
  var newColor2 = prompt(
    'Ingresé un el nuevo color para reemplazar ' + newColor
  )

  parsedKitty.colors[colorIndex] = newColor2
}

// Convierto a JSON

var stringyKitty = JSON.stringify(parsedKitty)

// Piso el valor en el LS

localStorage.setItem('kittyHouse', stringyKitty)
