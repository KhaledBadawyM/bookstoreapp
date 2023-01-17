import { Router } from 'express'
import userRouter from './userRoute'
import productRoute from './productRoute'

const router = Router()

router.use('/', userRouter)
router.use('/product', productRoute)

export default router