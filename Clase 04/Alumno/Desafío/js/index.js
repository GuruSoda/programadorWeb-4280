// - Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido,
//    si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario `-1`.
//    La función solo encuentra coincidencias exactas, por ejemplo encuentra `Fernandez`, pero no `Fer` o `fernandez`.
// - Probar que funcione correctamente.

var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

function buscarAlumno (texto, vector) {
  for (var i = 0; i < vector.length; i++) {
    if (texto === vector[i].firstName || texto === vector[i].lastName) return i
  }

  return -1
}

// Prueba:
// console.log(buscarAlumno('Pedro', studentsList))
// console.log(buscarAlumno('Cacho', studentsList))
// console.log(buscarAlumno('Pablo', studentsList))
