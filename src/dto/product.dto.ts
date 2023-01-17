import { Optional } from "sequelize/types"

export type CreateProductDTO = {
    title: string;
    image: string;
    price: number;
}

export type UpdateProductDTO = {
    title: string;
    image: string;
    price: number;
}

export type FilterUserDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}