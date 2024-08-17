
import { Router, Request, Response} from 'express'
import { AuthorController } from '../controllers/authorController'

const authorRouter = Router()
const authorController = new AuthorController()



authorRouter.post('/', async(req: Request, res: Response) => {    
    authorController.createAction(req.body).then(() => {
        res.json({
            success: true,
            message: 'Author has been created successfully' 
            })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

export default authorRouter

