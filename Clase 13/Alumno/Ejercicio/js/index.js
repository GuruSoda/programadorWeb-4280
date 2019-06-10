$(document).ready(function () {
  var node = $('#counter')

  $(window).keydown(function (event) {
    var valor = node.html()

    switch (event.keyCode) {
      case 38:
        valor++
        break
      case 40:
        valor--
        break
      case 13:
        valor = 0
        break
    }
    node.html(valor)
  })
})
