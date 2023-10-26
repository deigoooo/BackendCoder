import { products } from '../dao/products.js'

export const getProductsService = () => {
    return products
}

export const createProductService = (newProduct) => {
    products.push(newProduct)
    return products
}