// STRINGS

let variable = 'Pedro'
let string = `Cadena de texto ${variable}`

// Usar simbolo de escape \
// \n para saltar linea
// \b borra 1 espacio
// \t es un tabulador

let string1 = 'El simbolo con el que se escapa es \\ pruebalo'
console.log(string1)

// saber cuantas letras tiene 1 string

let contadorDeLetras = 'Murciélago'

console.log(contadorDeLetras.length)

// uso de slice (cortar)
let texto = 'Educación'
console.log(texto.slice(4,7));

// para reemplazar un texto
texto = 'La Educación es muy importante en Chile'
const resultado = texto.replace('Chile', 'Mundo')
console.log(resultado)

// para mayusculas toUpperCase()
console.log(resultado.toUpperCase())

// para minusculas toLowerCase()
console.log(resultado.toLowerCase())

// para concatenar se usa + o concat
const concatena1 = 'La educacion es importante en '
const concatena2 = 'Chile '
const concatena3 = 'Mundo '

const resultado1 = concatena1.concat(concatena2)
console.log(resultado1)

// eliminar los espacios se usa trim
// Para eliminar los espacios al principio usamos tirmStart
// Para eliminar los espacios al final usamos trimEnd
const eliminarEspacios = '                Para eiminar los espacios al principio y al final usamos trim     '
console.log(eliminarEspacios.trim())
console.log(eliminarEspacios.trimStart())
console.log(eliminarEspacios.trimEnd())

// uso CharAt 
const usoCharAt = 'Probamos CharAt'
console.log(usoCharAt.charAt(5)) // debe mostrar m

// Uso Split
const usoDeSplit = 'Este texto te lo manda el Backend. Este texto es importante. Dividi el texto'
const resultadoSplit = usoDeSplit.split('.')
console.log(resultadoSplit)
