import mongoose from 'mongoose'

const pokemonCollection = 'pokemons'

const pokemonSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    specie: String,
    photo: String
})

const pokemonModel = mongoose.model(pokemonCollection, pokemonSchema)

export default pokemonModel