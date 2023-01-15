import {UserInterface} from '../interfaces/userInterface'
import {UserOutput} from '../db/models/user'

export const toUser = (user: UserOutput): UserInterface => {
    return {
        id: user.id,
        email: user.email,
        password: user.password,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}