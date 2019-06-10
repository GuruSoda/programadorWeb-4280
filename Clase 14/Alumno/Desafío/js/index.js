// # Eliminar un elemento usando una animación de jQuery
// La función `removeElementWithAnimation` tiene que recibir como parámetro un Id 
// y eliminar el elemento usando en conjunto una animación de jQuery para que el cambio no sea tan brusco.

$(document).ready(function () {
  $('button').on('click', removeElementWithAnimation)

  function removeElementWithAnimation() {

    // nodoFila = registro de la tabla (tr)
    var nodoFila = $(this).parent().parent() // primer parent el td, segundo parent es el nodo tr

    // lo oculta del DOM en 750ms y cuando termina llama a la funcion.
    nodoFila.hide(750, function () {
      nodoFila.remove()
    })
  }
})