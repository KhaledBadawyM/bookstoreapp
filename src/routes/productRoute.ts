
import { Router, Request, Response} from 'express'
import { ProductController } from '../controllers/productController'
import { UserAuth } from '../auth/auth';


const productRouter = Router()
const productController = new ProductController()
const auth = new UserAuth()


productRouter.post('/list', auth.authenticateToken, productController.getAllProductAction)
productRouter.post('/update/:id', auth.authenticateToken, productController.updateProductAction)
productRouter.post('/delete/:id', auth.authenticateToken, productController.deleteProductAction)



export default productRouter

