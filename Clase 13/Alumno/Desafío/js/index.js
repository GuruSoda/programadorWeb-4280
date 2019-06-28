// Espero a que el HTML este completamente cargado
$(document).ready(function () {
  // Busco los nodos que voy a utilizar
  var firstNameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitButtonNode = $('#submitButton')

  firstNameInputNode.one('blur', validateEmtpyField)

  emailInputNode.one('blur', validateEmailField)

  commentsInputNode.one('blur', validateEmtpyField)

  // validateEmtpyField es una función que el campo tenga un valor
  function validateEmtpyField (event) {
    var inputNode = $(this)

    var errorText = ''
    inputNode.next().remove()

    if (!inputNode.val()) {
      errorText = 'Campo requerido'
    }

    if (errorText) {
      inputNode.removeClass('is-valid').addClass('is-invalid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
      $(this).attr('validado', '0')
    } else {
      inputNode.removeClass('is-invalid').addClass('is-valid')
      $(this).attr('validado', '1')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmtpyField)
    }

    validateButton()
  }

  // validateEmailField es una función que valida que el campo sea email
  function validateEmailField (event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      errorText = errorText + 'Campo requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.removeClass('is-valid').addClass('is-invalid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
      $(this).attr('validado', '0')
    } else {
      inputNode.removeClass('is-invalid').addClass('is-valid')
      $(this).attr('validado', '1')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  // validateButton habilita el botón de submit si existen
  // al menos cuatro nodos con la clase is-valid
  function validateButton () {
    if (
      firstNameInputNode.attr('validado') === '1' &&
      emailInputNode.attr('validado') === '1' &&
      commentsInputNode.attr('validado') === '1'
    ) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
})
