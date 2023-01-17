import {ProductInterface} from '../interfaces/productInterface'
import {ProductOutput} from '../db/models/product'

export const toProduct = (product: ProductOutput): ProductInterface => {
    return {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        deletedAt: product.deletedAt,
    }
}