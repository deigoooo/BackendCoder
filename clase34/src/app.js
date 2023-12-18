import express from 'express'
import logger from './logger.js'
import usersRouter from './routers/users.router.js'

const app = express()
app.use('/api/users', usersRouter)

app.get('/loggerTest', (req, res) => {
    logger.debug('Test de logger Debug')
    logger.http('Test de logger Http')
    res.send('ok')
})

app.listen(8080, () => logger.info('Server Up'))