
import { Router } from 'express'

// export class usersRouter

const userRouter = Router()
userRouter.get('/login', () => {
  // get user
})
userRouter.put('/:id', () => {
  // update user
})
userRouter.delete('/:id', () => {
  // delete user
})
userRouter.post('/register', () => {
  // create user
})

export default userRouter

