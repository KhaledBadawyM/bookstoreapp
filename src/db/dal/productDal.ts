
import {Op, where} from 'sequelize'
import {GetAllUserFilters} from './types'
import Product, {ProductInput, ProductOutput } from '../models/product'
import User from '../models/user'

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    const product = await Product.create(payload)
    return product
}

export const update = async (id: number, payload: Partial<ProductInput>): Promise<ProductOutput> => {
    const product = await Product.findByPk(id)
    if (!Product) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updateProduct = await (product as Product).update(payload)
    return updateProduct
}

export const getById = async (id: number): Promise<ProductOutput> => {
    const product = await Product.findByPk(id)
    if (!Product) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return product
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedProduct = await Product.destroy({
        where: {id}
    })
    return !!deletedProduct
}

export const getByTitle = async (title:string): Promise<ProductOutput> => {
    const product = await Product.findOne({where: {title: title}})
    return product;
}

export const getAll = async (userId:number, filters?: GetAllUserFilters): Promise<ProductOutput[]> => {
    return Product.findAll({
        where: {
            '$User.id$': userId,
        },
        include: [
            {model: User, as: User.tableName}
        ]
    })
}