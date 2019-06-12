import { getData } from '../utils/requestData'

function peopleController () {
  getData('https://swapi.co/api/people/', callbackPeople)
}

function callbackPeople (error, data) {
  if (error) return

  //  console.log(data)

  var verMasBoton = $('#seeMore')

  var tableBodyNode = $('#tableBody')

  for (var i = 0; i < data.results.length; i++) {
    //    console.log(data.results[i].name)

    var node =
      '<tr><td>' +
      data.results[i].url.split('/')[5] +
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
      data.results[i].url.split('/')[5] +
      '" type="button" class="btn btn-danger">Guardar</button></td></tr>'

    tableBodyNode.append(node)

    //   $('#'+data.results[i].url.split('/')[5])
  }

  if (data.next) {
    verMasBoton.one('click', function () {
      getData(data.next, callbackPeople)
    })
  } else {
    //  verMasBoton.disable
  }

  var GuardarButton = $('.btn-danger')

  GuardarButton.unbind('click')

  GuardarButton.click(function () {
    console.log('Click en ' + $(this).parent().attr('id'))
  })
}

export default peopleController
