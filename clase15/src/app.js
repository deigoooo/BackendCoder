import express from 'express'
import handlebars from 'express-handlebars'
import mongoose from 'mongoose'
import viewsRouter from './routers/views.router.js'
import pokemonRouter from './routers/pokemon.router.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')
app.use(express.static('./src/public'))

app.get('/', (req, res) => res.json({ status: 'ok' }))
app.use('/pokemon', viewsRouter)
app.use('/api/pokemon', pokemonRouter)

try {
    await mongoose.connect('mongodb+srv://coder:coder@cluster0.vzn33al.mongodb.net/', {
        dbName: 'pokedex'
    })
    app.listen(8080, () => console.log('Server Up'))
} catch(err) {
    console.log(err.message)
}