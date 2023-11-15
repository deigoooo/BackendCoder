import express from 'express'
import usersRouter from './routers/usersRouter.js'
import MongoClient from './dao/MongoClient.js'

const app = express()

let client = new MongoClient()
client.connect()

app.use(express.json())
app.use('/users', usersRouter)

app.listen(8080, () => console.log('Server Up!'))