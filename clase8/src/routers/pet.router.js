import express from 'express'
import multer from 'multer'

const pets = []
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const uploader = multer({storage})
const router = express.Router()

router.get('/', (req, res) => res.json({ pets }))
router.post('/', uploader.single('file'), (req, res) => {
    if (!req.file) return res.status(400).json({ status: 'error', error: 'No hay arhicvo adjunto' })
    const pet = req.body
    pet.id = pets.length === 0 ? 1 : pets[pets.length-1].id+1
    pets.push(pet)
    res.json(pet)
})

export default router