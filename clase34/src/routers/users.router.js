import { Router } from 'express'
import auth from '../middlewares/auth.middleware.js'

const users = [
    { id: 1, name:'Alex', age: 46 },
    { id: 2, name:'Maria', age: 24 },
    { id: 3, name:'Pedro', age: 31 },
]

const router = Router()

router.get('/', auth, (req, res) => {
    res.send({ status: 'success', payload: users })
})

export default router