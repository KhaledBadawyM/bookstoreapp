import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    email: string;
    password: string;
}

// export type UpdateUserDTO = Optional<CreateUserDTO, 'password'>
export type UpdateUserDTO = {
    email: string;
    password: string;
}

export type FilterUserDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}