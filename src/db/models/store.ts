import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Book from './book';
import StoreBook from './storeBook';

interface StoreAttributes {
    id: number;
    name: string;
    address: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface StoreInput extends Optional<StoreAttributes, 'id'> {}
export interface StoreOutput extends Required<StoreAttributes> {}

class Store extends Model<StoreAttributes, StoreInput> implements StoreAttributes {
    public id: number
    public name: string
    public address: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Store.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })
export default Store
