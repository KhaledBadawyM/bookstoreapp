
import * as authorDal from '../db/dal/authorDal'
import { AutherOutput, AuthorInput } from '../db/models/author'

export class AuthorService {

    async createAuthor(payload: AuthorInput):Promise<AutherOutput> {
        return await authorDal.create(payload)
    }

}
