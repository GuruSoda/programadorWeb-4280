import { getData } from '../utils/ajax'
import { getLocalList } from '../utils/localStorage'
import { searchPersonIndexById } from '../utils/search'

function peopleController () {
  var seeMoreButton = $('#seeMore')

  var localList = getLocalList('peopleList')

  var apiList = []

  console.log('PATO', localList)
  getData('https://swapi.co/api/people/', cbk)

  function cbk (error, data) {
    if (!error) {
      // Renderizaste los data.results
      apiList = apiList.concat(data.results)
      console.log(apiList)
      if (data.next) {
        seeMoreButton.one('click', function () {
          getData(data.next, cbk)
        })
      }
    }
  }
}

export default peopleController
