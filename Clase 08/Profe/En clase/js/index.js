console.log('Es mi idola! By Undi')

// var mainTitle = document.getElementById('main-title')

// console.log(mainTitle)

// var firstName = prompt('Ingresá tu nombre')

// console.log(mainTitle.innerHTML)

// var mainParagraph = document.getElementById('main-paragraph')

// mainParagraph.innerHTML = prompt('Ingresá tu texto')

// var user = {
//   firstName: 'Juan',
//   age: 30
// }

// user.firstName = 'Pedro'

// console.log(user)

// var mainDiv = document.getElementById('main-div')

// setTimeout(function () {
//   console.log(mainDiv)
// }, 3000)

// mainDiv.innerHTML = '<h2>Pato</h2>'

// var oldTitle = document.getElementById('old-title')

// var newTitle = prompt('Ingresá un nuevo título')

// oldTitle.innerHTML = newTitle

// var orsonFarm = document.getElementsByClassName('orson-farm')

// console.log(orsonFarm)

// for (var i = 0; i < orsonFarm.length; i++) {
//   var animal = orsonFarm[i]

//   animal.id = i

//   animal.innerHTML = 'Roy'
// }

// Busca el nodo con id farm-list
var farmList = document.getElementById('farm-list')

var animals = [
  { name: 'Orson', color: 'pink' },
  { name: 'Roy', color: 'red' },
  { name: 'Wade', color: 'yellow' }
]

for (var i = 0; i < animals.length; i++) {
  var animal = animals[i]

  // Crea un nodo li
  var li = document.createElement('li')

  // Pisa el contenido del nodo li recién creado
  li.innerHTML = '<h6>' + animal.name + '</h6>' + '<p>' + animal.color + '</p>'
  li.style.color = animal.color
  li.id = 'farm-list-' + i

  // Agrega al final de la lista
  farmList.appendChild(li)
}

// var index = prompt('Ingrese el elento a remover')

// // Busco el elemento en el DOM, haciendo una traducción de lo que ingresó
// // el usuario a un indice de JavaScript
// var elementToRemove = document.getElementById('farm-list-' + (index - 1))

// // Le pido al padre que lo remueva
// elementToRemove.parentNode.removeChild(elementToRemove)
