import { Router } from 'express'

const router = Router()

const foods = [
    { name: 'Banana', price: 10 },
    { name: 'Wine', price: 15 },
    { name: 'Hot Dogs', price: 100 },
    { name: 'Hamburguers', price: 210 },
    { name: 'Beers', price: 110 },
]

const user = {
    name: 'Emiliano',
    role: 'admin'
}

router.get('/', (req, res) => {
    //TODO: se obtiene el dato (nombre) del user
    res.render('foods', {
        user: user.name,
        isAdmin: user.role === 'admin',
        foods
    })
})

export default router