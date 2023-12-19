// primer ejemplo
//document.getElementById('demostracion').innerHTML = 'Este texto ha sido generado por JavaScript en archivo script.js'

// definicion de variables
// var ya no se usa, se recomienda const y let
// var y let pueden no tener un valor en la declaracion, pero const requiere que tenga un valor
//
//var nombreDeLaVariable = 'Curso JavaScript'
//let nombreDeVariable   = 'Sergie Code'
//const nombreVariable = 'Disponible en Youtube'

// se pueden definir varias variables al mismo tiempo
//let x,y,z;

//x = 5;
//y = 7;
//z = x + y;

// podemos asignar valores a variables separando por ; 
// x = 5; y = 7; z = x + y;

// definicion de funcion

//function nombreDeFuncion(){
//    const nombreVariable = 'Variable dentro de la funcion'
//}

// Numeros
/*
let variableNumero = 10;
let variableDecimal = 10.10;

// Texto
let variableTexto = 'Cadena de caracteres'
let variableTexto2 = "Cadena de caracteres"
let variableTexto3 = `Esta es una variable distinta ${variableNumero}`
*/

/*
// Operadores
const variable = 'Valor de la variable' // = operador de asignacion
const suma = 1 + 3 // + = operador de suma
const resta = 10 - 3 // - = operador de resta
const multiplicacion = 1 * 3 // * = operador de multiplicacion
const division = 1 / 3 // / = operador de division
const resto = 1 % 3 // % = operador de resto
const exponente = 1 ** 3 // ** = operador de exponente

let x = 5;
let y = 5;

x++; // ++ = suma 1 al valor que tiene x
y--; // -- = resta 1 al valor que tiene y

console.log('valor de variable' + variable);
console.log('valor de suma : ' + suma);
console.log('valor de resta : ' + resta);
console.log('valor de multiplicacion : ' + multiplicacion);
console.log('valor de division : ' + division);
console.log('valor de resto : ' + resto);
console.log('valor de exponente : ' + exponente);
console.log('valor de x++ : ' + x);
console.log('valor de y-- : ' + y);
*/

/*

// Sintaxis de variables
// No pueden empezar con numeros
// no pueden tener otros caracteres especiales distintos a $ y _
// Las variables son Case Senstive e: nombrevariables es distinto de nombreVariable
const $variable = 'variable que comienza con $';
const variable = 'variables con solo minusculas ';
const Variable = 'variable con primer caracter en Mayusculas';
const _variable = 'variable que empieza con _ ';

*/

/*
// SCOPE

let x = 5

{
    let x = 2;      // si no se define en el scope la misma variable utiliza la variable global
    console.log(x); // el ambito es distinto al global y mostrara 2
}

console.log(x); // esta en el ambito global y mostrara 5

*/

/*
// TIPOS DE DATOS

let a = 5 // number
let b = 5.5 // flotantes o decimal
let c = 'cadena texto' // string

// booleano
d = true
e = false

// Operadores logicos && = and , || = or 

// undefined
let f; // si no se asigna valor queda como undefined

// NULL
let g = null; // indica que no hay valor

// OBJETO
let objeto = {
    clave : 10  // clave : valor
}

// Array
let array = [1, 2, 3, 4, 5] // ARRAY DE NUMEROS
let array2 = ['HTML', 'JAVASCRIPT'] // ARRAY DE STRING

// DATE

let fecha = new Date("10-28-2023") // debe ser en formato USA MM-DD-YYYY
console.log(fecha);
*/
/*
// Operadores logicos

let x = 5;
let y = '5';
let p = 6;

let z = x == y; // == es comparacion entre x e y, para comparacion de valores absolutos y tipo de datos se utiliza ===
let h = x === y;
let distinto = x != p;

// Operador de Negacion !=

console.log(z) // devuelve true
console.log(h) // devuelve false
console.log(distinto) // devuelve true

// Otros operadores >, >=, <, <=
*/
