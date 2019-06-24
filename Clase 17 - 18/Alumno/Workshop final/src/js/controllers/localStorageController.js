import { getPeopleList, delItem } from '../utils/admlocalstorage'
import { translates, cm2Human } from '../utils/translates'

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
      cm2Human(peopleLocalStorage[i].height) +
      '</td><td>' +
      peopleLocalStorage[i].mass +
      ' Kg' +
      '</td><td>' +
      (translates[lang]['eye_color'][peopleLocalStorage[i].eye_color]
        ? translates[lang]['eye_color'][peopleLocalStorage[i].eye_color]
        : peopleLocalStorage[i].eye_color) +
      '</td><td><button id="' +
      id +
      '" type="button" class="btn btn-success">Eliminar</button></td></tr>'

    tableBodyNode.append(node)

    $('#' + id).one('click', function () {
      console.log('Click en ID:', $(this).attr('id'))

      $(this).parent().parent().fadeOut(500)

      delItem($(this).attr('id'))
    })
  }
}

export default localStorageController
