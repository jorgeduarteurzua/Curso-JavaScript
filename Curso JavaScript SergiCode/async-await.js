// async / await

let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Esta Info sale en 3 segundos'}
        response(respuestaServicio)
    }, 3000); // esperamos 3 segundos

})

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Esta Info demora 5 segundos'}
        response(respuestaServicio)
    }, 5000); // esperamos 3 segundos

})

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Esta Info demora 1 segundos'}
        response(respuestaServicio)
    }, 1000); // esperamos 3 segundos

})

// usamos async para indicar que es una funcion asincrona y await para la ejecución de la promesa
async function ejecutarPromesas(){

    let respPromesa1 = await promesa1
    console.log(respPromesa1)

    let respPromesa2 = await promesa2
    console.log(respPromesa2)

    let respPromesa3 = await promesa3
    console.log(respPromesa3)


}

ejecutarPromesas()