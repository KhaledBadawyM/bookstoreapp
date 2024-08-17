
import Book, {BookOutput, BookInput } from '../models/book'


export const create = async (payload: BookInput): Promise<BookOutput> => {
    return await Book.create(payload)
}


export const getAllBooksByAuthor = async (criteria: {authorId:number}): Promise<Book[]> => {
    return await Book.findAll(({ 
        where: criteria,
    })) 
}


export const getCheapestBookForAuthors = async (): Promise<any> => {
    const query = `
      SELECT a.name AS author, MIN(sb.price) AS cheapest_price
      FROM Books b
      JOIN StoreBooks sb ON b.id = sb.bookId
      JOIN Authors a ON b.authorId = a.id
      GROUP BY a.id
    `;

    const [results] = await Book.sequelize.query(query, { raw: true });

    return results
    // return results.map(result => ({
    //   author: result.author,
    //   cheapestPrice: parseFloat(result.cheapest_price) 
    // }));
};
