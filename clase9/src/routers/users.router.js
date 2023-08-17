import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    //TODO: se obtiene el dato (nombre) del user
    res.render('home', {
        name: 'Emiliano',
        lastname: 'Grange'
    })
})

export default router