// callbacks

function mostrarConsola(num){
    console.log(num)
}

// Funcion que recibe un callback, que es el nombre de una funcion
function calcular(num1, num2, callback){
    let suma = num1 + num2

    return callback(suma)
}

calcular(3, 4, mostrarConsola)