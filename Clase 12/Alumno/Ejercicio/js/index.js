$(document).ready(function () {
  console.log('Aca en el ta te ti')

  var circle = false
  var total = 0

  $('.square').click(function () {
    if ($(this).hasClass('circle') || $(this).hasClass('cross')) {
      // ya hice 9 clicks? borro todo
      if (total == 9) {
        var tateti = $('.square*')

        for (var i = 0; i < tateti.length; i++) {
          if ($(tateti[i]).hasClass('cross')) $(tateti[i]).removeClass('cross')
          if ($(tateti[i]).hasClass('circle'))
            $(tateti[i]).removeClass('circle')
        }

        total = 0

        // como borre todo no hago mas nada
        return
      } else {
        // No son 9 los clicks he hice click en un lugar que tiene un simbolo
        return
      }
    }

    if (circle) {
      $(this).addClass('circle')
    } else {
      $(this).addClass('cross')
    }

    circle = !circle
    total++
  })
})
