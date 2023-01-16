
import * as userDal from '../db/dal/userDal'
import {GetAllUserFilters} from '../db/dal/types'
import {UserInput, UserOutput} from '../db/models/user'

export class UserService {
    createUser(payload: UserInput):Promise<UserOutput> {
        return userDal.create(payload)
    }

    updateUser(payload: UserInput): Promise<UserOutput> {
        return userDal.create(payload)
    }

    getUserById(id: number): Promise<UserOutput> {
        return userDal.getById(id)
    }

    getUserByEmail(email: string): Promise<UserOutput> {
        return userDal.getByEmail(email)
    }

    deleteUserById(id: number): Promise<boolean> {
        return userDal.deleteById(id)
    }

    getAllUsers(filters: GetAllUserFilters): Promise<UserOutput[]> {
        return userDal.getAll(filters)
    }
}
// export const create = (payload: UserInput): Promise<UserOutput> => {
//     return userDal.create(payload)
// }
// export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
//     return userDal.update(id, payload)
// }
// export const getById = (id: number): Promise<UserOutput> => {
//     return userDal.getById(id)
// }
// export const deleteById = (id: number): Promise<boolean> => {
//     return userDal.deleteById(id)
// }
// export const getAll = (filters: GetAllUserFilters): Promise<UserOutput[]> => {
//     return userDal.getAll(filters)
// }