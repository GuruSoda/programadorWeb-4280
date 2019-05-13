//- Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo `<li>` con los datos del alumno.

/*
Ejemplo:
<li class="list-group-item" id="22999333">
  <h1>
    Juan Peréz
  </h1>
  <h3>
    DNI: 22999333
  </h3>
  <p>
    E-mail: juan@gmail.com
  </p>
</li>
 */

var student = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

var studentNode = createStudentNode(student)

console.log(studentNode)

function createStudentNode (newStudent) {
  var nodoLi = document.createElement('li')

  nodoLi.id = newStudent.dni
  nodoLi.className = 'list-group-item'

  var nodoH1 = document.createElement('h1')
  nodoH1.innerHTML = newStudent.firstName

  var nodoH3 = document.createElement('h3')
  nodoH3.innerHTML = 'DNI:' + newStudent.dni

  var nodoP = document.createElement('h1')
  nodoP.innerHTML = 'E-mail: ' + newStudent.email

  nodoLi.appendChild(nodoH1)
  nodoLi.appendChild(nodoH3)
  nodoLi.appendChild(nodoP)

  return nodoLi
}
