import Book from './models/book'
import Store from './models/store'
import Author from './models/author'
import StoreBook from './models/storeBook'
const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
  Book.sync({ alter: isDev })
  Store.sync({ alter: isDev })
  Author.sync({ alter: isDev })
  StoreBook.sync({ alter: isDev })
}

export default dbInit 