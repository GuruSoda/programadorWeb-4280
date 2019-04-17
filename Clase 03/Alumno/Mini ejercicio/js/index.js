// Pedirle mediante `prompt` al usuario que ingrese una contraseña,
// si el usuario no ingresó nada volver a pedirse la de nuevo hasta que ingrese algo.

do {
  var ingreso = prompt('Ingrese una contraseña')
} while (ingreso === '' || ingreso === null) // version correcta -> } while (!ingreso)

console.log('Clave ingresada: ' + ingreso)
