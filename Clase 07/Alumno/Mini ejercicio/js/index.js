// - Convertir el siguiente string en un objeto de JavaScript, luego mostrar en consola el precio y el modelo del objeto.

var car = '{"price":3500,"model":"Etios","brand":"Toyota"}'

var objectCar = JSON.parse(car)

console.log('Precio:' + objectCar.price)

console.log('Modelo:' + objectCar.model)
