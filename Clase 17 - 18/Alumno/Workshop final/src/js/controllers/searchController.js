import { getData } from '../utils/requestData'
import {
  delItem,
  existItem,
  addItem,
  changeState
} from '../utils/admlocalstorage'
import { translates, cm2Human } from '../utils/translates'

function searchController (strSearch) {
  getData('https://swapi.co/api/people/?search=' + strSearch, callbackSearch)
}

var items = []

function callbackSearch (error, data) {
  if (error) {
    console.error('Error:', data)
    return
  }

  var tableBodyNode = $('#tableBody')
  var lang = 'es'

  items = data.results

  for (var i = 0; i < data.results.length; i++) {
    var id = data.results[i].url.split('/')[5]

    var node =
      '<tr><td>' +
      id +
      '</td><td>' +
      data.results[i].name +
      '</td><td>' +
      (translates[lang]['gender'][data.results[i].gender]
        ? translates[lang]['gender'][data.results[i].gender]
        : data.results[i].gender) +
      '</td><td>' +
      cm2Human(data.results[i].height) +
      '</td><td>' +
      data.results[i].mass +
      ' Kg' +
      '</td><td>' +
      (translates[lang]['eye_color'][data.results[i].eye_color]
        ? translates[lang]['eye_color'][data.results[i].eye_color]
        : data.results[i].eye_color) +
      '</td><td>'

    //  Para el boton
    var existePersonaje = existItem(data.results[i])

    if (existePersonaje) {
      node +=
        '<button id="' +
        id +
        '" type="button" localstorage="1" class="btn btn-success">Guardado</button></td>'
    } else {
      node +=
        '<button id="' +
        id +
        '" type="button" localstorage="0" class="btn btn-danger">Guardar</button></td>'
    }

    node += '</tr>'

    tableBodyNode.append(node)

    // para el click en el boton estado
    $('#' + id).click(items, changeState)
  }
}

export default searchController
