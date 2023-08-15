import express from 'express'

const users = []

const router = express.Router()

router.get('/', (req, res) => res.json({ users }))
router.post('/', (req, res) => {
    const user = req.body
    user.id = users.length === 0 ? 1 : users[users.length-1].id+1
    users.push(user)
    res.json(user)
})

export default router