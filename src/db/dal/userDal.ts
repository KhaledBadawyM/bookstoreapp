
import {Op} from 'sequelize'
import User from '../models/user'
import {GetAllUserFilters} from './types'
import {UserInput, UserOutput} from '../models/user'

export const create = async (payload: UserInput): Promise<UserOutput> => {
    const user = await User.create(payload)
    return user
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(id)
    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
    const updateUser = await (user as User).update(payload)
    return updateUser
}

export const getById = async (id: number): Promise<UserOutput> => {
    const user = await User.findByPk(id)
    if (!user) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return user
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedUser = await User.destroy({
        where: {id}
    })
    return !!deletedUser
}

export const getAll = async (filters?: GetAllUserFilters): Promise<UserOutput[]> => {
    return User.findAll({
        where: {
            ...(filters?.isDeleted && {deletedAt: {[Op.not]: null}})
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && {paranoid: true})
    })
}