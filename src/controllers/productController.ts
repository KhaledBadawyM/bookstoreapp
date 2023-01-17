
import {ProductService} from '../services/productService'
import {CreateProductDTO, UpdateProductDTO, FilterUserDTO} from '../dto/product.dto'
import {ProductInterface} from '../interfaces/productInterface'
import * as productMapper from '../mappers/productMapper'
import { Request, Response, NextFunction} from 'express'

export class ProductController {

    async createProductAction(payload: CreateProductDTO): Promise<ProductInterface> {
        const productService = new ProductService();
        return productMapper.toProduct(await productService.createProduct(payload))
    }


    async updateProductAction(payload: UpdateProductDTO): Promise<ProductInterface> {
        const productService = new ProductService();
        return productMapper.toProduct(await productService.updateProduct(payload))
    }

    async getProductAction(id: number): Promise<ProductInterface> {
        const productService = new ProductService();
        return productMapper.toProduct(await productService.getProductById(id))
    }

    async deleteProductAction(id: number): Promise<Boolean> {
        const productService = new ProductService();
        return await productService.deleteProductById(id)
    }

    async getAllProductAction(filters: FilterUserDTO): Promise<ProductInterface[]> {
        // userId:number, 
        const userId = 1 // get it from request
        const productService = new ProductService();
        return (await productService.getAllProducts(userId, filters)).map(productMapper.toProduct)
    }

}
