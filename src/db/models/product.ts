import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import User from './user';

interface ProductAttributes {
    id: number;
    title: string;
    image: string;
    price:number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface ProductInput extends Optional<ProductAttributes, 'id'> {}
export interface ProductOutput extends Required<ProductAttributes> {}

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    public id!: number
    public title!: string
    public image!: string
    public price!: number
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Product.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING
    },
    price: {
        type: DataTypes.INTEGER
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })

  Product.belongsTo(User, {
    foreignKey: {
        allowNull: false
    }
})
  
export default Product
