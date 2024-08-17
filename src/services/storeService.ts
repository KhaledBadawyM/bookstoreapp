
import * as storeDal from '../db/dal/storeDal'
import { StoreInput, StoreOutput } from '../db/models/store'


export class Storervice {
    async createStore(payload: StoreInput): Promise<StoreOutput> {
        return await storeDal.create(payload)
    }

}
