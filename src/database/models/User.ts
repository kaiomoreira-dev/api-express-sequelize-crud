import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '..';
import { Post } from './Post';

export interface UserAttributes {
  id?: string;
  name: string;
  email: string;
  phone: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserCreationAttributes extends UserAttributes {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes{
  createdAt?: Date;
  updatedAt?: Date;
}
export const User = sequelizeConnection.define<UserInstance>('users', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{
            msg: 'O campo nome é obrigatório'
          },
        },
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    }
})
  // 1:N (Usuario tem muitos posts)
  User.hasMany(Post, {
    foreignKey: 'idUser',
    as: 'posts',
  })

