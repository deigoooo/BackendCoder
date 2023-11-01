import { Router } from "express";
import { generateToken, authToken } from "../utils.js";
import passport from "passport";

const router = Router()

const users = [
    { email: 'admin@gmail.com', password: 'secret', role: 'admin' },
    { email: 'alexmarinmendez@gmail.com', password: 'secret', role: 'user' },
]

router.post('/register', (req, res) => {
    const user = req.body
    if (users.find( u => u.email === user.email )) {
        return res.status(400).send({ status: 'error', error: 'User already exists' })
    }
    users.push(user)
    const access_token = generateToken(user)
    res.send({ status: 'success', access_token })
})

router.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = users.find( u => u.email === email && u.password === password)
    if (!user) return res.status(400).send({ status: 'error', error: 'Invalid credentials' })
    const access_token = generateToken(user)
    // res.send({ status: 'success', access_token })
    res.cookie('jwt-coder', access_token, { signed: true }).send({ status: 'success' })
})

// router.get('/private', authToken, (req, res) => {
//     res.send({ status: 'success', payload: req.user })
// })
router.get('/private', passport.authenticate('jwt', { session: false }), (req, res) => {
    // res.send({ status: 'success', payload: req.user })
    if (req.user === 'error') return res.send({ status: 'error' , error: 'Not authorized'})
    res.send({ status: 'success', message: 'Welcome!' })
})

export default router