
import Author, {AutherOutput, AuthorInput } from '../models/author'


export const create = async (payload: AuthorInput): Promise<AutherOutput> => {
    return await Author.create(payload)
}
