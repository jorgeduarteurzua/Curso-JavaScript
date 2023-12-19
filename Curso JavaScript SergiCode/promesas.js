// promesas

// en response si resulta OK, y reject si es Error
let promesa = new Promise((response, reject) => {
    let respuestaServicio = {code: 200, message : 'Todo Resulto OK'}
    response(respuestaServicio)
    reject('Algo salio mal')
})

// invocacion de promesa se utiliza .then

promesa.then(res => {
    // devolvemos la descripcion de la respuesta
    console.log(res.message)
}).catch(error => {
    console.error(error)
})

// Usando timeout
console.log('Vamos a ver el efecto del setTimeout en la promesa')
let promesa1 = new Promise((response, reject) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Todo Resulto OK'}
        response(respuestaServicio)
        reject('Algo salio mal')        
    }, 3000); // esperamos 3 segundos

})

// invocacion de promesa se utiliza .then

promesa1.then(res => {
    // devolvemos la descripcion de la respuesta
    console.log(res.message)
}).catch(error => {
    console.error(error)
})

//

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Esta Info sale en 3 segundos'}
        response(respuestaServicio)
    }, 3000); // esperamos 3 segundos

})

let promesa4 = new Promise((response) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Esta Info demora 5 segundos'}
        response(respuestaServicio)
    }, 5000); // esperamos 3 segundos

})

let promesa5 = new Promise((response) => {
    setTimeout(() => {
        let respuestaServicio = {code: 200, message : 'Esta Info demora 1 segundos'}
        response(respuestaServicio)
    }, 1000); // esperamos 3 segundos

})

promesa3.then(res => {
    // devolvemos la descripcion de la respuesta
    console.log(res.message)
    // invocamos a la promesa4
    promesa4.then(res => {
        console.log(res.message)
        // invocamos a la promesa5
        promesa5.then(res =>{
            console.log(res.message)
        }).catch(error => {
          console.error(error)
        })
    }).catch(error => {
        console.error(error)
    })
}).catch(error => {
    console.error(error)
})