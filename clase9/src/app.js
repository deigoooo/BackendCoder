import express from 'express'
import handlebars from 'express-handlebars'
import usersRouter from './routers/users.router.js'
import foodsRouter from './routers/foods.router.js'

const app = express()

//setear handlebars
app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

app.use('/users', usersRouter)
app.use('/foods', foodsRouter)
app.listen(8080, () => console.log('Server Up!'))