import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

$(document).ready(function () {
  router()

  // Cuando hacen click en el boton buscar de la barra de navegacion
  $('#search').on('click', function () {
    var busqueda = $('#searchInput').val()

    if (busqueda) {
      window.location.hash = '#/search/' + busqueda
    }
  })
})
