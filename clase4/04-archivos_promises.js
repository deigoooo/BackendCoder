import fs from 'fs'

const operaciones = async() => {
    await fs.promises.writeFile('./ejemplo.txt', 'Hola Mundo!!')
    let contenido = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
    console.log(contenido)
    await fs.promises.appendFile('./ejemplo.txt', 'Hola de nuevo')
    contenido = await fs.promises.readFile('./ejemplo.txt', 'utf-8')
    console.log(contenido)
}

operaciones()