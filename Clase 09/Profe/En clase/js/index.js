console.log('Llueve mucho!')

var button = document.getElementById('button')
var emailInput = document.getElementById('email')

button.onclick = buttonClick

function buttonClick () {
  var emailValue = emailInput.value

  if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
    emailInput.classList.add('is-invalid')
    emailInput.classList.remove('is-valid')
  } else {
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')
  }

  console.log('Hicieron click', emailValue)
}
