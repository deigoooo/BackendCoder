import Router from 'express'
import {sendSMS} from '../controllers/twilio.controller.js'

const router = Router()

router.post('/', sendSMS)

export default router