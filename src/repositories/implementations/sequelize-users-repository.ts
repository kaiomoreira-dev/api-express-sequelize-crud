import { IUserRepository } from "../interface-users-repository";
import { User, UserAttributes } from "../../database/models/User";
import { Post } from "@/database/models/Post";

export class SequelizeUserRepository implements IUserRepository{
    async updateById(data: UserAttributes){
        const user = await User.update(data, { where: { id : data.id}, returning: true });

        user[1][0].setAttributes({password: undefined});
                 
        return user[1][0];
    }
   
    async create(data: UserAttributes){
        const user = await User.create(
            data,
            {fields: ['id', 'name', 'email', 'password', 'phone']});

        user.setAttributes({password: undefined});
        
        return user;
    }
    async findByEmail(email: string){
        const user = await User.findOne({ where: { email } });

        return user;
    }
    async findById(id: string) {
        const user = await User.findOne({ where: { id }, include:{model: Post, as: 'posts', foreignKey: 'idUser'} });

        return user;
    }
    async list(){
        const users = await User.findAll(
            {include:{model: Post, as: 'posts', foreignKey: 'idUser'}}
        );

        return users;
    
    }
    async deleteById(id: string) {
        await User.destroy({ where: { id } });
    }
}