import { getData } from '../utils/requestData'
import { getPeopleList, delItem } from '../utils/admlocalstorage'
import translates from '../utils/translates'

function searchController (strSearch) {
  getData('https://swapi.co/api/people/?search=' + strSearch, callbackSearch)
}

function callbackSearch (error, data) {
  if (error) {
    console.error('Error:', data)
    return
  }

  var tableBodyNode = $('#tableBody')
  var lang = 'es'

  for (var i = 0; i < data.results.length; i++) {
    var id = data.results[i].url.split('/')[5]

    var node =
      '<tr><td>' +
      id +
      '</td><td>' +
      data.results[i].name +
      '</td><td>' +
      translates[lang]['gender'][data.results[i].gender] +
      '</td><td>' +
      data.results[i].height +
      '</td><td>' +
      data.results[i].mass +
      '</td><td>' +
      (translates[lang]['eye_color'][data.results[i].eye_color]
        ? translates[lang]['eye_color'][data.results[i].eye_color]
        : data.results[i].eye_color) +
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

export default searchController
