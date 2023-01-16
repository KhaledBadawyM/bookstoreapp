import {UserService} from '../services/userService'
import {CreateUserDTO, UpdateUserDTO, FilterUserDTO} from '../dto/user.dto'
import {UserInterface} from '../interfaces/userInterface'
import * as userMapper from '../mappers/userMapper'

export class UserController {
    userService: UserService
    constructor() {
        this.userService = new UserService();
    }

    async createUserAction(payload: CreateUserDTO): Promise<UserInterface> {
        return userMapper.toUser(await this.userService.createUser(payload))
    }

    async updateUserAction(payload: UpdateUserDTO): Promise<UserInterface> {
        return userMapper.toUser(await this.userService.updateUser(payload))
    }

    async getUserAction(id: number): Promise<UserInterface> {
        return userMapper.toUser(await this.userService.getUserById(id))
    }

    async deleteUserAction(id: number): Promise<Boolean> {
        return await this.userService.deleteUserById(id)
    }

    async getAllUserAction(filters: FilterUserDTO): Promise<UserInterface[]> {
        return (await this.userService.getAllUsers(filters)).map(userMapper.toUser)
    }

    async getUserByEmailAction(email: string): Promise<UserInterface> {
        return (await this.userService.getUserByEmail(email))
    }

}
