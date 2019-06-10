// # Eliminar un elemento usando una animación de jQuery
// La función `removeElementWithAnimation` tiene que recibir como parámetro un Id y eliminar el elemento usando en conjunto
//   una animación de jQuery para que el cambio no sea tan brusco.

$(document).ready(function () {
  console.log('Desafio 14!')

  $('.btn').click(function () {
    var nodo = $(this).parent().parent()

    nodo.fadeOut(500, function () {
      nodo.remove()
    })
  })
  /*
  // mal hecho, tiene que ser generico
  $('#botonEliminar').click(function (evento) {
    console.log('Eliminar!')
    $('#1').fadeOut(750, function () {
      $('#1').remove()
    })
  })
  */
})
