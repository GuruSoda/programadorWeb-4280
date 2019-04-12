// Pedir al usuario mediante `prompt` que ingrese su género y luego su edad.
// Luego mostrar un mensaje en consola que diga `Sr.`, `Sra.` o `Sx.`según corresponda y
// que también evalue si es mayor de edad o no al momento de construir el mensaje.
// Por ejemplo si el usuario ingresa `male` y `16`, el mensaje debería ser `Sr. usted es menor de edad no puede ingresar`,
// si ingresa `female` y `34`el mensaje sería `Sra. usted es mayor de edad puede ingresar`.

var genero = prompt('Ingrese su Genero (male|female)')

var edad = prompt('Edad?')

var mensaje

// para el genero.
if (genero === 'male') {
  mensaje = 'Sr. '
} else {
  if (genero === 'female') {
    mensaje = 'Sra.'
  } else {
    mensaje = 'Sx.'
  }
}

// para la edad
if (edad >= 18) {
  mensaje = mensaje + ' usted en mayor de edad puede ingresar'
} else {
  mensaje = mensaje + ' usted es menor de edad no puede ingresar'
}

console.log(mensaje)
