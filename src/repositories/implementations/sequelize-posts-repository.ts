import { Post, PostAttributes } from "@/database/models/Post";
import { IPostRepository } from "../interface-posts-repository";

export class SequelizePostRepository implements IPostRepository{
    async create({
        idUser,
        title,
        description,
        image,
        published,
    }: PostAttributes){
        const post = await Post.create({
            idUser,
            title,
            description,
            image,
            published,
        });

        return post;
    }
    async deleteById(id: string): Promise<void> {
        await Post.destroy({ where: { id } });
    }
}