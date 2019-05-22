$(document).ready(function () {
  console.log('Soy un jQuery')

  // Vanilla JS
  // var titleNode = document.getElementById('title')

  // titleNode.innerHTML = 'Pato'

  // jQuery
  // var titleNode = $('#title')

  // titleNode.html('Pato')

  // Vanilla JS
  // var liNodes = document.getElementsByClassName('duck')

  // for (var i = 0; i < liNodes.length; i++) {
  //   var liNode = liNodes[i]
  //   liNode.innerHTML = 'Perro'
  // }

  // jQuery
  // var liNodes = $('li')

  // liNodes.html('Perro')

  // var animals = [ 'Hipopotamo', 'León', 'Tigre' ]

  // Vanilla JS
  // var listNode = document.getElementById('list')

  // for (var i = 0; i < animals.length; i++) {
  //   var liNode = document.createElement('li')

  //   liNode.innerHTML = animals[i]

  //   listNode.appendChild(liNode)
  // }

  // var listNode = $('ol')

  // for (var i = 0; i < animals.length; i++) {
  //   listNode.append('<li>' + animals[i] + '</li>')
  // }

  var liNodes = $('.duck')

  liNodes.click(liClick)

  liNodes.hover(liHover)

  function liHover () {
    var node = $(this)

    node.remove()
  }

  function liClick () {
    var node = $(this)

    // node.remove()

    node.addClass('is-valid')
  }
})
