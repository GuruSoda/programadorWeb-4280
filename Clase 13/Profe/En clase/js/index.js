$(document).ready(function () {
  console.log('The winter is gone')

  // # 13 Más eventos y métodos de jQuery [Modulo C]

  // - 13.1 Validar un formulario usando métodos de jQuery
  //    - `.on()`

  // var button = $('.btn-success')

  // button.on('click', clickButton)

  // // button.on('click', clickButton)

  // function clickButton () {
  //   console.log('El usuario hizo click en ', $(this))
  // }

  // var inputEmail = $('#exampleInputEmail1')

  // inputEmail.on('blur', blurEmail)

  // function blurEmail () {
  //   console.log('El usuario hizo blur en ', $(this))
  // }

  // inputEmail.on('input', inputEmailKeyPress)

  // function inputEmailKeyPress () {
  //   var inputNode = $(this)

  //   console.log('El usuario hizo input en ', inputNode.val())
  // }

  // button.on('click', function () {
  //   console.log('El usuario hizo click en ')
  // })

  //    - `.one()`

  // var inputEmail = $('#exampleInputEmail1')

  // inputEmail.one('blur', blurEmail)

  // function blurEmail () {
  //   console.log('Coffee and TV, BLUR')
  // }

  // var firstNameInput = $('#firstName')

  // firstNameInput.one('blur', validateRequired)

  // function validateRequired (event) {
  //   var inputNode = $(this)

  //   var value = inputNode.val()

  //   var invalidFeedbackNode = inputNode.next()

  //   var error = ''

  //   if (!value) {
  //     error = 'Pone un nombre valido!'
  //   } else if (value.length < 4) {
  //     error = 'El usuario tiene que tener como mínimo 4 carácteres'
  //   } else if (value.indexOf(' ') !== -1) {
  //     error = 'El usuario no tiene que contener espacios'
  //   } else if (value.indexOf('@') === -1) {
  //     error = 'El usuario tiene que contener al menos un @'
  //   }

  //   if (error) {
  //     // Error
  //     inputNode.addClass('is-invalid')
  //     inputNode.removeClass('is-valid')
  //     inputNode.css('color', 'red')
  //     invalidFeedbackNode.html(error)
  //   } else {
  //     // Ok
  //     inputNode.addClass('is-valid')
  //     inputNode.removeClass('is-invalid')
  //     inputNode.css('color', 'green')
  //   }

  //   if (event.type === 'blur') {
  //     inputNode.on('input', validateRequired)
  //   }

  //   console.log('Summer is coming', invalidFeedbackNode)
  // }

  //    - `.append()`
  //    - `.next()`
  //    - `.remove()`
  //    - `.parent()`
  //    - `.css()`
  // - 13.1 Responder a eventos del teclado
  //    - `.keydown()`
  // $(window).keydown(keyDownPress)

  // function keyDownPress (event) {
  //   var keyCode = event.keyCode

  //   switch (keyCode) {
  //     case 27:
  //       console.log('Salir de pantalla completa')
  //       break
  //     case 32:
  //       console.log('Pausar video')
  //       break
  //   }
  // }

  //       - Enter: 13
  //       - Up: 38
  //       - Down: 40
  //       - Right: 39
  //       - Left: 37
  //       - Esc: 27
  //       - SpaceBar: 32
  //       - Ctrl: 17
  //       - Alt: 18
  //       - Shift: 16

  var firstNameInput = $('#firstName')

  firstNameInput.on('input', changeInputValue)

  function changeInputValue () {
    var inputNode = $(this)

    var value = inputNode.val()

    // var valueLowerCase = value.replace(' ', '')

    // inputNode.val(valueLowerCase)

    console.log('Tu valor en pesos es ', value * 45)
  }
})

// var counter = 0

// counter--

// counter = counter - 1

// counter++

// counter = counter + 1
