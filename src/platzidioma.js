export default function platzom(str){
  let translation = str

  // si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  // si la palabra inicia con z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  // si la palabra traducida tiene 10 o mas letras,
  // se debe partir a la mitad y unir con un guion en el medio
  if (translation.length >= 10) {
    const firsthalf = translation.slice(0, Math.round(translation.length / 2))
    const secondhalf = translation.slice(Math.round(translation.length / 2))
    translation = `${firsthalf}-${secondhalf}`
  }

  // si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúscula y minúsculas

  const reverse = (str) => str.split('').reverse().join('')

  function minmay(str){
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minmay(str)
  }

  return translation
}

