// Pedir al usuario mediante `prompt` que ingrese un día de la semana y mostrar en consola un mensaje si el día es fin de semana,
// hábil o no es un día valido

var dia = prompt('Ingrese el dia.')

switch (dia) {
  case 'sabado':
  case 'domingo':
    console.log('Es fin de semana.')
    break

  case 'lunes':
  case 'martes':
  case 'miercoles':
  case 'jueves':
  case 'viernes':
    console.log('Es un dia habil.')
    break

  default:
    console.log('No es un dia valido')
}
