import {UserService} from '../services/userService'
import {CreateUserDTO, UpdateUserDTO, FilterUserDTO} from '../dto/user.dto'
import {UserInterface} from '../interfaces/userInterface'
import * as userMapper from '../mappers/userMapper'
import { Request, Response, NextFunction} from 'express'
import { UserAuth } from '../auth/auth';

export class UserController {
    userService: UserService
    constructor() {
        this.userService = new UserService();
    }

    async createUserAction(payload: CreateUserDTO): Promise<UserInterface> {
        return userMapper.toUser(await this.userService.createUser(payload))
    }

    async registerUserAction(req: Request, res: Response): Promise<any> {
        const userService = new UserService();
        const payload:CreateUserDTO = req.body
        // await this.userService.getUserByEmail(email)
        const isExist = await userService.getUserByEmail(payload.email)
        console.log(isExist)
        if (isExist) {
          return res.status(400).json({error: 'Email already exist'})
        }
        const user = userMapper.toUser(await userService.createUser(payload))

        res.status(200).json({message: 'Registerd successfully', user: user});
        // return userMapper.toUser(await this.userService.createUser(payload))

    }

    async loginUserAction(req: Request, res: Response): Promise<any>  {
        console.log(req.body)
        const userService = new UserService();
        const auth = new UserAuth()
        try {
            const payload:CreateUserDTO = req.body
            const user = await userService.getUserByEmail(payload.email)
            if (user) {
                const isMatch = await userService.verifyPassword(payload.password, user.password)
                if (isMatch) {
                    const access_token = auth.generateToken(user.email)
                    return res.status(200).cookie('access_token', access_token, {httpOnly: true}).json({success:true, message: 'logged in successfully.'})
                } else {
                    return res.status(400).json({message: 'Invalid email or password'});
                }
            } else {
                return res.status(400).json({message: 'Email doesn\'t exist'});
            }
        } catch (error) {
            return res.status(500).json({message: 'somthing went wrong'});
        }
       
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
