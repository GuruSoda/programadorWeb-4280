var translates = {
  es: {
    gender: {
      male: 'Hombre',
      female: 'Mujer',
      'n/a': 'Desconocido',
      none: 'Ninguno',
      hermaphrodite: 'Hermafrodita'
    },
    eye_color: {
      yellow: 'Amarillo',
      brown: 'Marron',
      red: 'Rojo',
      orange: 'Naranja',
      'blue-gray': 'Gris Azulado',
      black: 'Negro',
      hazel: 'Avellana',
      blue: 'Azul',
      pink: 'Rosado',
      gold: 'Oro',
      unknown: 'Desconocido',
      white: 'Blanco',
      dark: 'Oscuro'
    }
  },
  pt: {
    gender: {
      male: 'Chonguiño',
      female: 'Chonguiña',
      'n/a': 'Chonguiñe'
    }
  }
}

// Segun http://www.rae.es/diccionario-panhispanico-de-dudas/apendices/simbolos-alfabetizables
function cm2Human (cm) {
  if (cm < 100) return cm + ' cm'
  else return cm / 100 + ' m'
}

// export default translates
export { translates, cm2Human }
