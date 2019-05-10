console.log('Llueve mucho!')

// var button = document.getElementById('button')
// var emailInput = document.getElementById('email')

// button.onclick = buttonClick

// function buttonClick () {
//   var emailValue = emailInput.value

//   if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
//     emailInput.classList.add('is-invalid')
//     emailInput.classList.remove('is-valid')
//   } else {
//     emailInput.classList.add('is-valid')
//     emailInput.classList.remove('is-invalid')
//   }

//   console.log('Hicieron click', emailValue)
// }

// var nameInput = document.getElementById('name')
// var lastNameInput = document.getElementById('lastName')
// var button = document.getElementById('button')

// nameInput.onblur = validateRequired
// lastNameInput.onblur = validateRequired

// function validateRequired (event) {
//   var inputNode = event.target
//   var inputValue = inputNode.value

//   if (!inputValue) {
//     inputNode.classList.add('is-invalid')
//     inputNode.classList.remove('is-valid')
//   } else {
//     inputNode.classList.add('is-valid')
//     inputNode.classList.remove('is-invalid')
//   }

//   checkButtonValidation()
// }

// function checkButtonValidation () {
//   var validInputs = document.getElementsByClassName('is-valid')

//   if (validInputs.length === 2) {
//     button.disabled = false
//   } else {
//     button.disabled = true
//   }
// }

var cpInput = document.getElementById('cp')

cpInput.onblur = validateCp

function validateCp (event) {
  var inputNode = event.target

  var inputValue = inputNode.value

  var parsedInputValue = parseInt(inputValue, 10)

  if (
    !inputValue ||
    isNaN(parsedInputValue) ||
    parsedInputValue < 1000 ||
    parsedInputValue > 9999
  ) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  }
}
