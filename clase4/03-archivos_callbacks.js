import fs from 'fs'

fs.writeFile('./ejemplo.txt', 'Hola Mundo', error => {
    if (error) return console.log('Hubo un error')
    fs.appendFile('./ejemplo.txt', 'Hola de nuevo', error => {
        if (error) return console.log('Hubo un error')
        fs.readFile('./ejemplo.txt', 'utf-8', (error, contenido) => {
            if (error) return console.log('Hubo un error')
            console.log(contenido)
            fs.unlink('./ejemplo.txt', error => {
                if (error) return console.log('Hubo un error')
                console.log('Archivo borrado')
            })
        })
    })
    console.log('Archivo escrito correctamente')
})