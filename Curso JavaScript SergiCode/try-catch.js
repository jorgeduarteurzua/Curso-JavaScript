// Manejo de Errores Try - Catch

try{
    // Llamado al Backend a traves un API
    console.log('Llamando al Backend')

    // usamos Throw para generar un error controlado
    //throw('El cliente no es apto para la compra')

    // Usamos setTimeout para ejecutar asincrono
    setTimeout(() => {
        console.log('El backend nos responde : ')
        //console.log('Cliente apto para la compra')

        // veamos como se comporta con el throw, genera error porque esta dentro de una funcion asíncrona
        // throw solo funciona para procesos sincronos
        throw('El cliente no es apto para la compra')
    }, 1000);

}catch(error){
    // Se captura el Error
    // En el caso del throw el error es lo que esta dentro del parametro
    console.log('Algo fallo', error)

}finally{
    // Se ejecuta Siempre, falle o no
    console.log('Se ejecuta siempre')
}