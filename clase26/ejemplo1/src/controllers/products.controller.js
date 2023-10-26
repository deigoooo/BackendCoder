import { getProductsService, createProductService } from "../services/products.service.js"

export const getProductsController = (req, res) => {
    const result = getProductsService()
    res.json({ status: 'success', payload: result })
}

export const createProductController = (req, res) => {
    const newProduct = req.body
    const result = createProductService(newProduct)
    res.json({ status: 'success', payload: result })
}