$(document).ready(function () {
  console.log('Ok')
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log('Scroll', scrollTop)

    $('#background1').css('top', -(scrollTop * 0.5) + 'px')
    $('#background2').css('top', -(scrollTop * 0.75) + 'px')
    $('#background3').css('top', -(scrollTop * 2) + 'px')
  })
})
