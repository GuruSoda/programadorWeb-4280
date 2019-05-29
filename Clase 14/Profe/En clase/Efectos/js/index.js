$(document).ready(function () {
  console.log('Si, es CoderHouse')
  // - 15.1 Efectos y animaciones

  // var coverNode = $('#cover1')

  //  - `.show()`
  //  - `.hide()`

  // coverNode.hide(3000, function () {
  //   console.log('Se terminó de animar')
  //   coverNode.show(1000)
  // })

  // coverNode.click(function () {
  //   console.log('Click en el cover 1 y empiezo a ocultar')
  //   coverNode.hide(3000, function () {
  //     console.log('Se terminó de animar')
  //     // coverNode.parent().hide()
  //     // coverNode.parent().show()
  //     coverNode.show(1000)
  //   })
  //   console.log('Llame a la función que oculta')
  // })

  //  - `.fadeIn()`
  //  - `.fadeOut()`

  // var coverNumbers = 2

  // coverNode.click(function () {
  //   $('#cover' + coverNumbers).fadeOut(3000, function () {})
  //   coverNumbers++
  // })

  //  - `.slideUp()`
  //  - `.slideDown()`
  // coverNode.click(function () {
  //   coverNode.slideUp(3000, function () {
  //     coverNode.slideDown(3000)
  //   })
  // })

  // var coverNodes = $('.figure')

  // var modalNode = $('#modal')

  // modalNode.click(function (event) {
  //   console.log(event)
  //   event.stopPropagation()
  // })

  // coverNodes.click(function () {
  //   console.log('Hice click')
  //   modalNode.show(300, function () {
  //     // modalNode.delay(5000).hide()
  //   })
  // })

  // coverNodes.click(function () {
  //   var coverNode = $(this)

  //   // coverNode
  //   //   .parent()
  //   //   .append(
  //   //     '<iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
  //   //   )

  //   // coverNode.fadeOut(300)

  //   coverNode.fadeOut(300, function () {
  //     coverNode.parent().mouseleave(function () {
  //       coverNode.delay(100).fadeIn(300)
  //     })
  //     // coverNode.delay(100).fadeIn(300)
  //   })
  // })

  var coverNodes = $('.figure')

  coverNodes.click(function () {
    var coverNode = $(this)
    // console.log(coverNode)
    coverNode.animate(
      {
        width: '50%',
        top: '-60%'
      },
      1500
    )
  })
})
