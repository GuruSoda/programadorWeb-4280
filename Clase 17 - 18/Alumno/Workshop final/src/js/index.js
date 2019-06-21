import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

$(document).ready(function () {
  router()

  $('#search').on('click', function () {
    var busqueda = $('#searchInput').val()

    if (busqueda) {
      window.location.href = '#/search/' + busqueda
    }
  })
})
