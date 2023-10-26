import { Router } from 'express'
import { getProductsController, createProductController } from '../controllers/products.controller.js'

const router = Router()

router.get('/', getProductsController)
router.post('/', createProductController)

export default router