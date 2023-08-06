// const temporizador = callback => {
//     // setTimeout(callback, 2000)
//     // setTimeout(callback, 0)
//     setInterval(callback, 2000)
// }

const temporizador = () => {
    let counter = 1
    const timer = setInterval(() => {
        console.log('Ejecutar operacion')
        counter++
        if (counter > 5) {
            clearInterval(timer)
        }
    }, 2000)
}

const operacion = () => console.log('Ejecutar operacion')

console.log('Iniciar proceso')
temporizador(operacion)
console.log('Finalizar proceso')