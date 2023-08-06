// const fs = require('fs')    //CommonJS
import fs from 'fs'         //ESModule

fs.writeFileSync('./ejemplo.txt', 'Hola Mundo!!')
// fs.writeFileSync('./ejemplo.txt', 'Hola Mundo!!\nHola de nuevo!!')
fs.appendFileSync('./ejemplo.txt', 'Hola de nuevo despues de cambiar el archivo')

if (fs.existsSync('./ejemplo.txt')) {
    console.log(fs.readFileSync('./ejemplo.txt', 'utf-8'))
    fs.unlinkSync('./ejemplo.txt')
} else {
    console.log('El archivo no existe')
}
