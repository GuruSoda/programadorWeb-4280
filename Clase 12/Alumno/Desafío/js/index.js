// El formulario deberá validar el campo email verificando que contenga arroba, punto y contenido.
// Si existe algún error deberá mostrar el campo en rojo.

$(document).ready(function () {
  $('#email').blur(function () {
    // si tiene alguna clase se la borro

    $(this).removeClass('is-invalid')
    $(this).removeClass('is-valid')

    var valor = $(this).val()

    if (valor.indexOf('@') < 0 || valor.indexOf('.') < 0 || valor.length == 0) {
      $(this).addClass('is-invalid')
    } else {
      $(this).addClass('is-valid')
    }
  })
})
