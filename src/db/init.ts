import User  from './models/user'
import Product from './models/product'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  User.sync({ alter: isDev })
  Product.sync({ alter: isDev })
}
export default dbInit 