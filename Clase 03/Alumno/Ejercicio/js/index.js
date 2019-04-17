// Usando el Array de ejemplo como dato inicial crear un programa que lo recorra e identifique si el día es fin de semana,
// día hábil o no es un día valido. El programa tiene que poder reconocer los días con y sin tilde.

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  switch (daysOfTheWeek[i]) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log('El ' + daysOfTheWeek[i] + ' es dia de semana.')
      break

    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log('El ' + daysOfTheWeek[i] + ' es fin de semana.')
      break

    case 'Pato':
    default:
      console.log(daysOfTheWeek[i] + ' es un valor invalido.')
  }
}
