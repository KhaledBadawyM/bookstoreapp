import { Router } from 'express'
import storeRouter from './storeRoute'
import authorRouter from './authorRoute'
import bookRouter from './bookRoute'

const router = Router()

router.use('/book', bookRouter)
router.use('/author', authorRouter)
router.use('/store', storeRouter)

export default router