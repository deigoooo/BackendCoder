import express from 'express'
import userRouter from './routers/user.router.js'
import petRouter from './routers/pet.router.js'

const active = false

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('./public'))

//middleware
const ejemplo = (req, res, next) => {
    if (!active) return res.status(500).json({ status: 'error', error: 'No es temporada para registrar mascotas' })
    next()
}

// app.use(ejemplo)
app.use('/users', userRouter)
app.use('/pets', petRouter)

app.listen(8080, () => console.log('Server Up!!'))