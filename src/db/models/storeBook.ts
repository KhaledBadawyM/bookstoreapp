import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Book from './book';
import Store from './store';


interface StoreBookAttributes {
    id: number;
    price: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface StoreBookInput extends Optional<StoreBookAttributes, 'id'> {StoreId: number, BookId:number}
export interface StoreBookOutput extends Required<StoreBookAttributes> {}

class StoreBook extends Model<StoreBookAttributes, StoreBookInput> implements StoreBookAttributes {
  public id: number;
  public price: number;
  public bookId: number;
  public storeId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
  
StoreBook.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })
  
  Book.belongsToMany(Store, { through: StoreBook, as: 'stores'});
  Store.belongsToMany(Book, { through: StoreBook, as: "books"});

export default StoreBook
