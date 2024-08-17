
import { Router, Request, Response} from 'express'
import { AuthorController } from '../controllers/authorController'
import { BookController } from '../controllers/bookController'
import { StoreController } from '../controllers/storeController'

const storeRouter = Router()
const storeController = new StoreController()



storeRouter.post('/', async(req: Request, res: Response) => {    
    storeController.createAction(req.body).then(() => {
        res.json({
            success: true,
            message: 'Store has been added successfully' 
            })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

export default storeRouter

