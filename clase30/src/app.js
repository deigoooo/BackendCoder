import express from 'express'
import checkoutRouter from './routers/checkout.router.js'
import twilioRouter from './routers/twilio.router.js'

const app = express()
app.use(express.json())
app.use('/cart', checkoutRouter)
app.use('/sms', twilioRouter)

app.listen(8080, () => console.log('Server Up'))