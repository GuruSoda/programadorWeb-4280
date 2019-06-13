var listPeople = []

function getPeopleList() {

  if (listPeople.length == 0) {
    var localStorageList = localStorage.getItem("peopleStarWar")

    if (localStorageList) {
      listPeople = JSON.parse(localList)
    }
  }
}

function setPeopleList() {

  if (listPeople.length > 0) {
    localStorage.setItem("peopleStarWar", listPeople)
  }
}

function getItem(id) {
  var item = {}

  if (listPeople.length == 0) getPeopleList

  for (var i = 0; i < listPeople.length; i++) {
    if (id = person.url.split('/')[5]) {
      item = listPeople[i]
    }
  }

  return item
}

function addItem(id) {
  var item = {}

  if (listPeople.length == 0) getPeopleList

  for (var i = 0; i < listPeople.length; i++) {
    if (id = person.url.split('/')[5]) {
      item = listPeople[i]
    }
  }

  console.log('addItem:', item)

  if (item) {
    listPeople.push(item)

    setPeopleList
  }

  return item
}

export {
  addItem,
  getItem
}