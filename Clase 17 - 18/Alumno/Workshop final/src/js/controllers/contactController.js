import { postData } from '../utils/requestData'

function contactController () {
  var firstNameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitButtonNode = $('#submitButton')

  firstNameInputNode.on('input blur', validateEmtpyField)
  emailInputNode.on('input blur', validateEmailField)
  commentsInputNode.on('input blur', validateEmtpyField)

  // Si el campo esta vacio agrega un div con la leyenda "Campo requerido"
  function validateEmtpyField (event) {
    var inputNode = $(this)

    inputNode.next().remove()

    if (!inputNode.val()) {
      inputNode.removeClass('is-valid').addClass('is-invalid')
      inputNode.attr('correcto', '0')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">Campo requerido</div>')
    } else {
      inputNode.removeClass('is-invalid').addClass('is-valid')
      inputNode.attr('correcto', '1')
    }

    validateButton()
  }

  // Verifica si el campo esta vacio y/o tiene un correo correcto.
  // El campo de correo se verifica media una expresion regular.
  function validateEmailField (event) {
    var inputNode = $(this)

    var msgError = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      msgError = 'Campo requerido '
    } else {
      if (
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(value) ===
        false
      ) {
        msgError = 'Formato: nombre usuario + @ + servidor + dominio'
      }
    }

    if (msgError) {
      inputNode.removeClass('is-valid').addClass('is-invalid')
      inputNode.attr('correcto', '0')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + msgError + '</div>')
    } else {
      inputNode.removeClass('is-invalid').addClass('is-valid')
      inputNode.attr('correcto', '1')
    }

    validateButton()
  }

  // Verifica que los campos necesarios para hacer el post tengo el atributo correcto con el valor 1
  function validateButton () {
    if (
      firstNameInputNode.attr('correcto') === '1' &&
      emailInputNode.attr('correcto') === '1' &&
      commentsInputNode.attr('correcto') === '1'
    ) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }

  submitButtonNode.click(function () {
    var firstName = firstNameInputNode.val()
    var email = emailInputNode.val()
    var comments = commentsInputNode.val()

    var data = {
      firstName: firstName,
      email: email,
      comments: comments
    }

    postData('./simpleEmail.php', data, function (error, data) {
      if (!error) {
        window.location.hash = '#/contact/greetings'
      }
    })
  })
}

export default contactController
