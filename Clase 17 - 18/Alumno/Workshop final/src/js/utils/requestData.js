function getData (url, cbk) {
  $.ajax(url)
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}

function postData (url, data, cbk) {
  $.ajax({
    url: url,
    method: 'POST',
    data: data
  })
    .done(function (data) {
      cbk(null, data)
    })
    .fail(function (error) {
      cbk(error)
    })
}

export { getData, postData }
