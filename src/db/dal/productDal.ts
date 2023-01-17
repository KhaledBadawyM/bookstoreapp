
import {Op, where} from 'sequelize'
// import Product from '../models/product'
import {GetAllUserFilters} from './types'
import Product, {ProductInput, ProductOutput } from '../models/product'

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    const Product = await Product.create(payload)
    return Product
}

export const update = async (id: number, payload: Partial<ProductInput>): Promise<ProductOutput> => {
    const Product = await Product.findByPk(id)
    if (!Product) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updateProduct = await (Product as Product).update(payload)
    return updateProduct
}

export const getById = async (id: number): Promise<ProductOutput> => {
    const Product = await Product.findByPk(id)
    if (!Product) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return Product
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedProduct = await Product.destroy({
        where: {id}
    })
    return !!deletedProduct
}

export const getByEmail = async (email:string): Promise<ProductOutput> => {
    const Product = await Product.findOne({where: {email: email}})
    return Product;
}

export const getAll = async (filters?: GetAllUserFilters): Promise<ProductOutput[]> => {
    return Product.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}