// Datos iniciales

var student = {
  firstName: 'Juan',
  lastName: 'Perez',
  dni: 22999333,
  email: 'juan@gmail.com'
}

/**
 * createStudentNode es una función que devuelve un nodo li
 * con los datos del alumno pasado por parámetro
 * @param { Student } newStudent
 * @returns Node
 */
function createStudentNode (newStudent) {
  // Creo el nodo li
  var liNode = document.createElement('li')

  // Le setteo el id al nodo
  liNode.id = newStudent.dni

  // Le setteo la clase al nodo
  liNode.className = 'list-group-item'

  var fullName = ''

  if (newStudent.firstName && newStudent.lastName) {
    fullName = newStudent.firstName + ', ' + newStudent.lastName
  } else if (newStudent.firstName) {
    fullName = newStudent.firstName
  } else if (newStudent.lastName) {
    fullName = newStudent.lastName
  }

  // Le agrego el contenido al nodo
  liNode.innerHTML =
    '<h1>' +
    fullName +
    '</h1><h3>DNI:' +
    newStudent.dni +
    '</h3><p>E-mail:' +
    newStudent.email +
    '</p>'

  // Devuelvo solo el nodo con todos sus datos
  return liNode
}

// Creo un nodo para probar y le paso el objeto estudiante
var studentNode = createStudentNode(student)

console.log(studentNode)
