
import {CreateBookDTO} from '../dto/book.dto'
import { SellBookDTO } from '../dto/storeBook.dto';
import { BookService } from '../services/bookService';

export class BookController {

    async createAction(payload: CreateBookDTO): Promise<void> {
        const bookService = new BookService();
        await bookService.addBook(payload)
    }
    
    async sellAction(payload: SellBookDTO): Promise<void> {
        const bookService = new BookService();
        await bookService.sellBook(payload)
    }

    async getStoreBooksAction(storeId: number): Promise<any[]> {
        const bookService = new BookService();
        return await bookService.getBooksByStore(storeId)
    }

    async getAuthorBooksAction(authorId: number): Promise<any[]> {
        const bookService = new BookService();
        return await bookService.getBooksByAuthor(authorId)
    }

    async getCheapest(): Promise<any[]> {
        const bookService = new BookService();
        return await bookService.getAuthorsCheapeastBooks()
    }

}
