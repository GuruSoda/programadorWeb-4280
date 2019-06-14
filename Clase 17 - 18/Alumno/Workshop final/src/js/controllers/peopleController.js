import { getData } from '../utils/requestData'

import { addItem, getItem } from '../utils/admlocalstorage'

function peopleController () {
  getData('https://swapi.co/api/people/', callbackPeople)
}

var items = []

function callbackPeople (error, data) {
  if (error) {
    console.error('Error:', data)
    return
  }

  //  console.log(data)

  var verMasBoton = $('#seeMore')
  var verMenosBoton = $('#seeLess')

  var tableBodyNode = $('#tableBody')

  $('#tableBody > tr').remove()

  items = data.results

  for (var i = 0; i < data.results.length; i++) {
    //    console.log(data.results[i].name)

    var id = data.results[i].url.split('/')[5]

    var node =
      '<tr><td>' +
      id +
      '</td><td>' +
      data.results[i].name +
      '</td><td>' +
      data.results[i].gender +
      '</td><td>' +
      data.results[i].height +
      '</td><td>' +
      data.results[i].mass +
      '</td><td>' +
      data.results[i].eye_color +
      '</td><td><button id="' +
      id +
      '" type="button" class="btn btn-danger">Guardar</button></td></tr>'

    tableBodyNode.append(node)

    $('#' + id).click(function () {
      console.log('Click en guardar!')
      $(this).removeClass('btn-danger')
      $(this).addClass('btn-success')
      $(this).html('Guardado')

      var id = $(this).attr('id')
      //      console.log('ID:' + $(this).attr('id'))

      // Busco en los objetos traidos el objeto con el id
      for (var i = 0; i < items.length; i++) {
        if (items[i].url.split('/')[5] == id) {
          console.log('Por agregar: ', items[i])
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
