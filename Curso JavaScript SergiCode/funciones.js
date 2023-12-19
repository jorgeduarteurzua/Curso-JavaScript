// usar node script.js

// Funciones

function suma(x, y){
    return x + y;
}
let respuesta = suma(5, 6);
console.log(respuesta)

const temperatura = 76;
function transformarACelsius(farenheit){
//C = (F – 32) / 1.8
    return (farenheit - 32) / 1.8
}

console.log('function transformarACelsius : ' + parseInt(transformarACelsius(temperatura)));

// Funcion flecha
let num = 10;
let sumarDecena = (numero) => {  // si la funcion no recibe parametros se define como --> let sumarDecena = () => num + 12
    return numero + 12;
}

console.log('function sumarDecena : ' + sumarDecena(num));

// Funcion flecha en 1 sola linea
let sumarDecena2 = numero => numero + 12;
console.log('function sumarDecena2 : ' + sumarDecena2(num));