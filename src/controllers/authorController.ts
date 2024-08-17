
import {CreateAuthorDTO} from '../dto/author.dto'
import { AuthorService } from '../services/authorService'

export class AuthorController {

    async createAction(payload: CreateAuthorDTO): Promise<void> {
        const authorService = new AuthorService();
        await authorService.createAuthor(payload)
    }

}
