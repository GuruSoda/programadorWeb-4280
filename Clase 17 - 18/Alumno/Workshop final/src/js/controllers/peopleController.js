import { getData } from '../utils/requestData'
import translates from '../utils/translates'
import { addItem, getItem, existItem } from '../utils/admlocalstorage'

function peopleController () {
  getData('https://swapi.co/api/people/', callbackPeople)
}

var items = []

function callbackPeople (error, data) {
  if (error) {
    console.error('Error:', data)
    return
  }

  var lang = 'es'

  var verMasBoton = $('#seeMore')
  var verMenosBoton = $('#seeLess')

  var tableBodyNode = $('#tableBody')

  $('#tableBody > tr').remove()

  items = data.results

  var existePersonaje

  for (var i = 0; i < data.results.length; i++) {
    //    console.log(data.results[i].name)

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
      data.results[i].height +
      '</td><td>' +
      data.results[i].mass +
      '</td><td>' +
      (translates[lang]['eye_color'][data.results[i].eye_color]
        ? translates[lang]['eye_color'][data.results[i].eye_color]
        : data.results[i].eye_color) +
      '</td>'

    existePersonaje = existItem(data.results[i])

    // para ver que tipo de boton le inserto
    node +=
      '<td><button id="' +
      id +
      '" type="button" class="btn ' +
      (!existePersonaje ? 'btn-danger' : 'btn-success') +
      '">' +
      (!existePersonaje ? 'Guardar' : 'Guardado') +
      '</button></td>'

    node += '</tr>'

    tableBodyNode.append(node)

    $('#' + id).click(function () {
      $(this).removeClass('btn-danger')
      $(this).addClass('btn-success')
      $(this).html('Guardado')

      var id = $(this).attr('id')

      // Busco en los objetos traidos el objeto con el id
      for (var i = 0; i < items.length; i++) {
        if (items[i].url.split('/')[5] == id) {
          addItem(items[i])
        }
      }
    })
  }

  if (data.previous) {
    verMenosBoton.css('display', 'inline-block')

    verMenosBoton.one('click', function () {
      getData(data.previous, callbackPeople)
      verMasBoton.unbind()
    })
  } else verMenosBoton.css('display', 'none')

  if (data.next) {
    verMasBoton.css('display', 'inline-block')

    verMasBoton.one('click', function () {
      getData(data.next, callbackPeople)
      verMenosBoton.unbind()
    })
  } else verMasBoton.css('display', 'none')
}

export default peopleController
