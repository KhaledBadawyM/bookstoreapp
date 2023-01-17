
import * as productDal from '../db/dal/productDal'
import {GetAllUserFilters} from '../db/dal/types'
import {ProductInput, ProductOutput} from '../db/models/product'
import bcrypt from 'bcrypt';

export class ProductService {
    // readonly saltRounds = 12

    async createProduct(payload: ProductInput):Promise<ProductOutput> {
        return productDal.create(payload)
    }

    updateProduct(payload: ProductInput): Promise<ProductOutput> {
        return productDal.create(payload)
    }

    getProductById(id: number): Promise<ProductOutput> {
        return productDal.getById(id)
    }

    getProductByTitle(title: string): Promise<ProductOutput> {
        return productDal.getByTitle(title)
    }

    deleteProductById(id: number): Promise<boolean> {
        return productDal.deleteById(id)
    }

    getAllProducts(userId:number, filters: GetAllUserFilters): Promise<ProductOutput[]> {
        return productDal.getAll(userId, filters)
    }
}
