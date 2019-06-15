var listPeople = []

// Cargo desde el local storage la data guardada a memoria
function getPeopleList () {
  if (listPeople.length == 0) {
    var localStorageList = localStorage.getItem('peopleStarWar')

    if (localStorageList) {
      listPeople = JSON.parse(localStorageList)
    }
  }

  return listPeople
}

// Guarda el vector que se encuentra en memoria en el local storage
function setPeopleList () {
  if (listPeople.length > 0) {
    localStorage.setItem('peopleStarWar', JSON.stringify(listPeople))
  }
}

function getItem (item) {
  var item = {}

  if (listPeople.length == 0) getPeopleList()

  for (var i = 0; i < listPeople.length; i++) {
    if (item.name === listPeople[i].name) {
      item = listPeople[i]
    }
  }

  return item
}

function addItem (item) {
  if (listPeople.length == 0) getPeopleList()

  // busco si ya existe para no agregarlo nuevamente
  for (var i = 0; i < listPeople.length; i++) {
    if (item.name === listPeople[i].name) {
      return
    }
  }

  listPeople.push(item)

  setPeopleList()
}

function existItem (item) {
  if (listPeople.length == 0) getPeopleList()

  for (var i = 0; i < listPeople.length; i++) {
    if (item.name === listPeople[i].name) {
      return true
    }
  }

  return false
}

function delItem (item) {
  if (listPeople.length == 0) getPeopleList()

  for (var i = 0; i < listPeople.length; i++) {
    if (item.name === listPeople[i].name) {
      listPeople.splice(i, 1)
      setPeopleList()
    }
  }
}

export { getPeopleList, addItem, getItem, existItem, delItem }
