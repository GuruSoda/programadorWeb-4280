import { getPeopleList, delItem } from '../utils/admlocalstorage'
import translates from '../utils/translates'

function localStorageController () {
  var tableBodyNode = $('#tableBody')
  var peopleLocalStorage = getPeopleList()
  var lang = 'es'

  console.log('Almacenados:', peopleLocalStorage.length)

  for (var i = 0; i < peopleLocalStorage.length; i++) {
    var id = peopleLocalStorage[i].url.split('/')[5]

    var node =
      '<tr><td>' +
      id +
      '</td><td>' +
      peopleLocalStorage[i].name +
      '</td><td>' +
      translates[lang]['gender'][peopleLocalStorage[i].gender] +
      '</td><td>' +
      peopleLocalStorage[i].height +
      '</td><td>' +
      peopleLocalStorage[i].mass +
      '</td><td>' +
      (translates[lang]['eye_color'][peopleLocalStorage[i].eye_color]
        ? translates[lang]['eye_color'][peopleLocalStorage[i].eye_color]
        : peopleLocalStorage[i].eye_color) +
      '</td><td><button id="' +
      id +
      '" type="button" class="btn btn-success">Eliminar</button></td></tr>'

    tableBodyNode.append(node)

    $('#' + id).one('click', function () {
      console.log('Click! ', $(this).attr('id'))

      $(this).parent().parent().fadeOut(300)
      delItem($(this).attr('id'))
    })
  }
}

export default localStorageController
