import { Router } from 'express'
import pokemonModel from '../models/pokemon.model.js'

const router = Router()

router.get('/', async (req, res) => {
    const pokemons = await pokemonModel.find()
    res.json({ pokemons })
})

router.post('/', async (req, res) => {
    const pokemonNew = req.body
    const pokemonGenerated = new pokemonModel(pokemonNew)
    try {
        await pokemonGenerated.save()
    } catch(err) {
        console.log(err.message)
    }
    res.redirect('/pokemon')
})

export default router