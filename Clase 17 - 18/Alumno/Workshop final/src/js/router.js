import crossroads from 'crossroads'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'

function router () {
  crossroads.addRoute('', function () {
    $('#root').load('./partials/home.html', function () {
      console.log('Home Page')
    })
  })

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', function () {
      console.log('Click on People Page')
      $('#root').load('./partials/people.html', peopleController)
    })
  })

  crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', function () {
      console.log('Local Storage')
    })
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
