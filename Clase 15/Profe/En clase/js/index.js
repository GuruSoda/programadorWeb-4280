// Un elemento solo
// $(document).ready(function () {
//   console.log('Wookie')

//   var url = 'https://swapi.co/api/'

//   console.log('Empiezo a pedir data')

//   getData(url + 'planets/3/', callback)

//   // getData(url + 'starships/3/', callback)

//   console.log('Termino de pedir data')
// })

// function callback (error, data) {
//   var planetNameNode = $('#planet-name')
//   var planetClimate = $('#planet-climate')
//   if (error) {
//     console.log('Hubo un error', error)
//   } else {
//     planetNameNode.html(data.name)
//     planetClimate.html(data.climate)
//     console.log('Todo ok', data.name, data.climate)
//   }
// }

// function getData (url, cbk) {
//   $.ajax(url)
//     .done(function (data) {
//       cbk(null, data)
//     })
//     .fail(function (error) {
//       cbk(error)
//     })
// }

// Caso directo pido todo de una
// $(document).ready(function () {
//   console.log('Wookie')

//   var url = 'https://swapi.co/api/'

//   getData(url + 'starships/', callback)
// })

// function callback (error, data) {
//   if (error) {
//     console.log('Hubo un error', error)
//   } else {
//     for (var i = 0; i < data.results.length; i++) {
//       console.log(data.results[i].name)
//     }

//     if (data.next) {
//       getData(data.next, callback)
//     }
//     // console.log('Todo ok', data)
//   }
// }

// function getData (url, cbk) {
//   $.ajax(url)
//     .done(function (data) {
//       cbk(null, data)
//     })
//     .fail(function (error) {
//       cbk(error)
//     })
// }

// Espero que el usuario pida ver más

$(document).ready(function () {
  console.log('Wookie')

  var url = 'https://swapi.co/api/'

  getData(url + 'starships/', callback)
})

var searchingMore

var nextUrl

function callback (error, data) {
  searchingMore = false

  var starshipsList = $('#starships-list')
  var addButton = $('#add-button')

  if (error) {
    console.log('Hubo un error', error)
  } else {
    for (var i = 0; i < data.results.length; i++) {
      var name = data.results[i].name

      starshipsList.append('<li class="list-group-item">' + name + '</li>')
    }

    $('#spinner').css('display', 'none')

    if (data.next) {
      nextUrl = data.next
      $(window).scroll(function () {
        if (
          $(window).scrollTop() >=
          $(document).height() - $(window).height() - 10
        ) {
          //Add something at the end of the page
          if (!searchingMore && nextUrl) {
            getData(nextUrl, callback)
            console.log('Pato')
            searchingMore = true
            $('#spinner').css('display', 'block')
          }
        }
      })
      // addButton.one('click', function () {
      //   getData(data.next, callback)
      // })
    } else {
      nextUrl = null
    }
  }
}

function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}
