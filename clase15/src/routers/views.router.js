import { Router } from 'express'
import pokemonModel from '../models/pokemon.model.js'

const router = Router()

router.get('/', async (req, res) => {
    const pokemons = await pokemonModel.find().lean().exec()
    res.render('list', { title: 'Lista de Pokemones', pokemons })
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Registro de Pokemones' })
})

export default router