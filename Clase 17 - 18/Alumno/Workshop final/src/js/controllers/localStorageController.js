import { getPeopleList } from '../utils/admlocalstorage'

function localStorageController () {
  var tableBodyNode = $('#tableBody')
  var peopleLocalStorage = getPeopleList()

  console.log('Almacenados:', peopleLocalStorage.length)

  for (var i = 0; i < peopleLocalStorage.length; i++) {
    var id = peopleLocalStorage[i].url.split('/')[5]

    var node =
      '<tr><td>' +
      id +
      '</td><td>' +
      peopleLocalStorage[i].name +
      '</td><td>' +
      peopleLocalStorage[i].gender +
      '</td><td>' +
      peopleLocalStorage[i].height +
      '</td><td>' +
      peopleLocalStorage[i].mass +
      '</td><td>' +
      peopleLocalStorage[i].eye_color +
      '</td><td><button id="' +
      id +
      '" type="button" class="btn btn-success">Eliminar</button></td></tr>'

    tableBodyNode.append(node)

    $('#' + id).click(function () {
      console.log('Click! ', $(this).attr('id'))
    })
  }
}

export default localStorageController
