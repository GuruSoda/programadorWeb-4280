// # Mostrar en consola todos los personajes listados en la API de Star Wars
// Usar la función `getData` para mostrar todos los nombres de los personajes de 
// Star Wars usando el páginado de la API y una función recursiva.

getData('https://swapi.co/api/people', listarPersonajes)

function listarPersonajes(error, data) {

  if (error) return

  for (var i = 0; i < data.results.length; i++) {
    console.log(data.results[i].name)
  }

  if (data.next)
    getData(data.next, listarPersonajes)
}

function getData(url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}