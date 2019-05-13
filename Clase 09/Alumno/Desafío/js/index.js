// - La función tiene que validar el campo en el cual se dispara el evento y verificar que el valor del mismo
//   sea un email valido (exista, tenga arroba y punto). En caso de que haya un error tiene que agregar una
//   clase para mostrar el input en rojo, en caso contrario una clase para que se muestre en verde.

console.log('Desafio 9')

var inputCP = document.getElementById('cp')

inputCP.onblur = validarCP

function validarCP(event) {

  var inputElement = event.target

  var valorEnInput = Number(inputElement.value)

  if (!valorEnInput || isNaN(valorEnInput) || valorEnInput < 1000 || valorEnInput > 9999) {
    inputElement.classList.add('is-invalid')
    inputElement.classList.remove('is-valid')
  } else {
    inputElement.classList.add('is-valid')
    inputElement.classList.remove('is-invalid')
  }
}