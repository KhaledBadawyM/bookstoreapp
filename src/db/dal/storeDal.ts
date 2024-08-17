
import Book from '../models/book'
import Store, {StoreOutput, StoreInput } from '../models/store'


export const create = async (payload: StoreInput): Promise<StoreOutput> => {
    return await Store.create(payload)
}

export const getAllBooksByStore = async(storeId: number): Promise<Store> =>  {
    return await Store.findByPk(storeId, { 
        include: [
            {model: Book, as: 'books'}
        ]
    })
}