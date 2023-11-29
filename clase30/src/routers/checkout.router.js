import Router from 'express'
import getbill from '../controllers/checkout.controller.js'

const router = Router()

router.post('/getbill', getbill)

export default router