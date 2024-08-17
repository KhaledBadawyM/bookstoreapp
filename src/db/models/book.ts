import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Author from './author';
import Store from './store';
import StoreBook from './storeBook';

interface BookAttributes {
    id: number;
    name: string;
    pages: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface BookInput extends Optional<BookAttributes, 'id'> {authorId: number;}
export interface BookOutput extends Required<BookAttributes> {author?: Author}

class Book extends Model<BookAttributes, BookInput> implements BookAttributes {
    public id: number
    public name: string
    public pages: number;
    public authorId: number
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Book.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pages: {
      type: DataTypes.INTEGER
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })


    Book.belongsTo(Author, {
        targetKey: 'id',
        foreignKey: 'authorId',
        as: 'author'
    });


export default Book
