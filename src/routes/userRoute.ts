
import { Router, Request, Response} from 'express'
import { UserController } from '../controllers/userController'
import {CreateUserDTO, UpdateUserDTO, FilterUserDTO} from '../dto/user.dto'
import { body, validationResult } from 'express-validator';
import { UserAuth } from '../auth/auth';

// import { validationResult } from 'express-validator/check'

const userRouter = Router()
const userController = new UserController()
const auth = new UserAuth()


userRouter.get('/:id', async (req: Request, res: Response) => {
  // get user
})
userRouter.put('/:id', () => {
  // update user
})
userRouter.delete('/:id', () => {
  // delete user
})

userRouter.post('/register', userController.registerUserAction)
userRouter.post('/login', userController.loginUserAction)

// userRouter.post('/register', body('email').isEmail(), body('password').isLength({ min: 5 }),
//   async (req: Request, res: Response) => {

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const payload:CreateUserDTO = req.body

//   const isExist = await userController.getUserByEmailAction(payload.email)
//   console.log(isExist)
//   if (isExist) {
//     return res.status(400).json({error: 'Email already exist'})
//   }

//   userController.createUserAction(payload).then(user => {
//     // return res.json(userMiddleware.generateToken(user.email))
//     return res.json(user)
//   }).catch(err => {
//     console.log(err)
//     return res.status(500).json({error: 'somthing went wrong, Please try again later.'})
//   })
// })

userRouter.post('/login', async (req: Request, res: Response) => {
  const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())
    const payload:CreateUserDTO = req.body
    // const payload = matchedData(req) as UserAddModel
    // const token = userController.login(payload)

    // return token.then(t => res.json(t))
})

export default userRouter

