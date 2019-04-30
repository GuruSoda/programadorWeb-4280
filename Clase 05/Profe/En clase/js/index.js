console.log('Quería el chupetín')

// var date = new Date()

// console.log(date)

// var oldHolliday = {
//   country: 'Brasil',
//   location: 'Playa',
//   days: 180
// }

// function Holiday (country, location, days) {
//   // this.country = country
//   // this.location = location
//   this.locationMessage =
//     'Vas a pasar tu vacaciones en ' + location + ' en ' + country
//   // this.days = days
//   // this.hours = days * 24
//   this.minutes = days * 24 * 60
// }

// var user1Country = prompt('Ingresa el primer país')
// var user1Location = prompt('Ingresa el lugar')
// var user1Days = prompt('Ingresa los días')

// var user1Holiday = new Holiday(user1Country, user1Location, user1Days)

// // var adrianHoliday = new Holiday('New York', 'La ciudad', 15)

// // console.log('Viejas', oldHolliday)

// console.log(user1Holiday)

// // console.log(adrianHoliday)

function Holiday (country, location, days) {
  var id = Math.random()

  this.country = country
  this.location = location
  // this.days = days

  this.getId = function () {
    return id
  }

  this.getTime = function (format) {
    if (format === 'hours') {
      return days * 24
    } else if (format === 'minutes') {
      return days * 24 * 60
    } else if (format === 'seconds') {
      return days * 24 * 60 * 60
    }
  }
}

var adrianHoliday = new Holiday('New York', 'La ciudad', 1)

// console.log(adrianHoliday)

// adrianHoliday.days = 2

// console.log(adrianHoliday.getTime('hours'))

// var patricioHoliday = new Holiday('Japón', 'Tokio', 21)

// console.log(patricioHoliday)

// var patricioId = patricioHoliday.getId()

// console.log(patricioId)

// adrianHoliday.country = 'Tailanda'

// console.log(adrianHoliday.country)

function House (rooms, zone, price, warranty) {
  this.warranty = warranty
  this.price = price

  this.getAllInfo = function () {
    var warrantyMessage = ''

    if (this.warranty) {
      warrantyMessage = ' require garantía en capital'
    } else {
      warrantyMessage = 'NO require garantía !!! :DDD'
    }

    return (
      'Hermoso departamento luminoso, con ' +
      rooms +
      ' cuartos, ubicado en el traqnuilo y seguro barrio de ' +
      zone +
      ' el alquiler sale ' +
      this.price +
      ' y ' +
      warrantyMessage
    )
  }
}

var houseToRent = new House(2, 'Belgrano', 18000, true)

console.log(houseToRent.getAllInfo())

houseToRent.price = 14000

console.log(houseToRent.getAllInfo())

// var houseToRent = new House(4, 'Libertad', 1000, false)

// console.log(houseToRent.getAllInfo())
