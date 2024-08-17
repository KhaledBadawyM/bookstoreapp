
import Book, { BookOutput } from '../models/book'
import StoreBook, {StoreBookOutput, StoreBookInput } from '../models/storeBook'


export const sell = async (payload: StoreBookInput): Promise<StoreBookOutput> => {
    return await StoreBook.create(payload)
}


export const getAllBooksByStore = async(criteria: {storeId: number}): Promise<StoreBookOutput[]> =>  {
    return await StoreBook.findAll(({ 
        where: criteria,
        include: [
            {model: Book, as: 'books'}
        ]
    }))
}

