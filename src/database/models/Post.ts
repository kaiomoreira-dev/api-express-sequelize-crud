import { DataTypes, Model } from 'sequelize';
import { hash } from 'bcrypt';
import { sequelizeConnection } from '..';
import { User } from './User';

export interface PostAttributes {
    id?: string;
    idUser?: string;
    title: string;
    description: string;
    image: string;
    published: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

interface PostCreationAttributes extends PostAttributes {}

interface Post extends Model<PostAttributes, PostCreationAttributes>, PostAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}

export const Post = sequelizeConnection.define<Post>('posts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: false,
    },
})

