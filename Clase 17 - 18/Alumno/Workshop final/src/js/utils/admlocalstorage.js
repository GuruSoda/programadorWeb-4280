var listPeople = []

// Cargo desde el local storage la data guardada a memoria
function getPeopleList () {
  if (listPeople.length == 0) {
    var localStorageList = localStorage.getItem('peopleStarWar')

    if (localStorageList) {
      listPeople = JSON.parse(localList)
    }
  }
}

// Guarda el vector que se encuentra en memoria en el local storage
function setPeopleList () {
  console.log('setPeopleList', listPeople)

  if (listPeople.length > 0) {
    localStorage.setItem('peopleStarWar', JSON.stringify(listPeople))
  }
}

function getItem (item) {
  var item = {}

  if (listPeople.length == 0) getPeopleList

  for (var i = 0; i < listPeople.length; i++) {
    if (item.name === listPeople[i].name) {
      item = listPeople[i]
    }
  }

  return item
}

function addItem (item) {
  console.log('En Item: ', item)

  if (listPeople.length == 0) getPeopleList

  console.log('Total item:', listPeople.length)
  console.log('antes de agregar', listPeople)

  // busco si ya existe para no agregarlo nuevamente
  for (var i = 0; i < listPeople.length; i++) {
    if (item.name === listPeople[i].name) {
      return
    }
  }

  console.log('por agregar', listPeople)

  listPeople.push(item)

  setPeopleList()

  console.log('Total items luego de agregado', listPeople.length)
}

export { addItem, getItem }
