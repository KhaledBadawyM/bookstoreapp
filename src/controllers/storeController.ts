
import {CreateStoreDTO} from '../dto/store.dto'
import { AuthorService } from '../services/authorService'
import { BookService } from '../services/bookService';
import { Storervice } from '../services/storeService';

export class StoreController {

    async createAction(payload: CreateStoreDTO): Promise<void> {
        const storeService = new Storervice();
        await storeService.createStore(payload)
    }

}
