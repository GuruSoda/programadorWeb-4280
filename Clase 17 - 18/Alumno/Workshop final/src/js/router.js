import crossroads from 'crossroads'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'
import localStorageController from './controllers/localStorageController'
import searchController from './controllers/searchController'

function router () {
  crossroads.addRoute('', function () {
    $('#root').load('./partials/home.html', function () {
      console.log('Home Page')
    })
  })

  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html', localStorageController)
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  crossroads.addRoute('#/search/{string}', function (str) {
    console.log('Se busco:', str)
    $('#root').load('./partials/result.html', searchController(str))
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
