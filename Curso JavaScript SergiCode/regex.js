// /pattern/modificadores

let texto = "Este es un curso de JavaScript y esta dado por Sergie Code"
let busqueda = texto.search(/sergie/i) // se agrega /i para ignorar case sensitive, sino dara -1 que no lo encuentra



// modificadores mas utilizados
// i = ignorar mayusculas y minusculas
// g = buscar en todo el texto pasado
// m = busqueda multilinea

let pattern = /Sergie/
let resultado = pattern.test(texto)

console.log(resultado)

let resultado1 = pattern.exec(texto)
console.log(resultado1)

// Para buscar un rango de numeros
let texto2 = "Este es un curso de JavaScript y esta dado por Sergie Code 8"
let pattern2 = /[0-9]/  // tambien puede ser /\d/ para indicar que sea un digito numerico
let resultado2 = pattern2.test(texto2)

console.log(resultado2)

// RegEx Email
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

console.log('Validamos correo')
console.log(emailRegex.test('jorge'))
console.log(emailRegex.test('jorge@gmail.cl'))