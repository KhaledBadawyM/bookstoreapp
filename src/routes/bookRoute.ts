
import { Router, Request, Response} from 'express'
import { AuthorController } from '../controllers/authorController'
import { BookController } from '../controllers/bookController'

const bookRouter = Router()
const bookController = new BookController()



bookRouter.post('/', async(req: Request, res: Response) => {    
    bookController.createAction(req.body).then(() => {
        res.json({
            success: true,
            message: 'Book has been added successfully' 
            })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

bookRouter.post('/sell', async(req: Request, res: Response) => {    
    await bookController.sellAction(req.body).then(() => {
        res.json({
            success: true,
            message: 'Book has been added to store successfully' 
            })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

bookRouter.get('/store/:storeId', async(req: Request, res: Response) => {    
    bookController.getStoreBooksAction(Number(req.params.storeId)).then(books => {
        res.json({
            message:'',
            data: books 
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

bookRouter.get('/author/:authorId', async(req: Request, res: Response) => {    
    bookController.getAuthorBooksAction(Number(req.params.authorId)).then(books => {
        res.json({
            message:'',
            data: books 
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

bookRouter.get('/cheapest', async(req: Request, res: Response) => {    
    bookController.getCheapest().then(books => {
        res.json({
            message:'',
            data: books 
        })
    }).catch(error => {
        console.log(error)
        res.status(500).json({success: false, error: 'Internal Server Error'});
    })
})

export default bookRouter

