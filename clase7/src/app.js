import express from 'express'

let users = [
    { id: 1, name: 'Uno', lastname: 'Coder', age: 35, active: true },
    { id: 2, name: 'Dos', lastname: 'Coder', age: 45, active: false },
    { id: 3, name: 'Tres', lastname: 'Coder', age: 95, active: true },
]

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
    res.status(200).json({ status: 'success', payload: users })
})

app.get('/users/:id', (req, res) => {
    const result = users.find(item => item.id == req.params.id)
    if (!result) return res.status(404).json({ status: 'error', error: 'User does not exists' })
    res.status(200).json({ status: 'success', payload: result })
})

app.post('/users', (req, res) => {
    // const newUser = req.body
    // newUser.id = (users.length === 0) ? 1 : users[users.length-1].id + 1
    const id = (users.length === 0) ? 1 : users[users.length-1].id + 1
    const newUser = {
        id,
        ...req.body
    }
    users.push(newUser)
    res.status(201).json({ status: 'success', payload: newUser })
})

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const indexUser = users.findIndex(item => item.id == id)
    if (indexUser < 0) return res.status(404).json({ status: 'error', error: 'User does not exists' })
    const oldUser = users[indexUser]
    users[indexUser] = {
        ...oldUser,
        ...req.body
    }
    res.status(200).json({ status: 'success', payload: users[indexUser] })
})

app.delete('/users/:id', (req, res) => {
    const oldLength = users.length
    users = users.filter(item => item.id !== parseInt(req.params.id))
    if (oldLength === users.length) return res.status(404).json({ status: 'error', error: 'User does not exists' })
    res.status(200).json({ status: 'success', payload: 'usuario eleiminado' })
})

app.listen(8080, () => console.log('Server Up!'))