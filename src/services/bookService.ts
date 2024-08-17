
import * as bookDal from '../db/dal/bookDal'
import * as storeBookDal from '../db/dal/storeBookDal'
import * as storeDal from '../db/dal/storeDal'

import { BookInput, BookOutput } from '../db/models/book'
import { StoreBookInput, StoreBookOutput } from '../db/models/storeBook'


export class BookService {

    async addBook(payload: BookInput): Promise<BookOutput> {
        return await bookDal.create(payload)
    }

    async sellBook(payload: StoreBookInput): Promise<void> {
        await storeBookDal.sell(payload)
    }


    async getBooksByStore(storeId: number): Promise<any> {
        return await storeDal.getAllBooksByStore(storeId)
    }

    async getBooksByAuthor(authorId: number): Promise<any[]> {
        return await bookDal.getAllBooksByAuthor({authorId})
    }

    async getAuthorsCheapeastBooks(): Promise<any[]> {
        return await bookDal.getCheapestBookForAuthors()
    }
}

