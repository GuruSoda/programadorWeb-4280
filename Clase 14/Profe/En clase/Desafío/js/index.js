$(document).ready(function () {
  var deleteButton = $('.btn-danger')

  deleteButton.click(function () {
    var trNode = $(this).parent().parent()

    trNode.hide(300, function () {
      trNode.remove()
    })
  })
})
