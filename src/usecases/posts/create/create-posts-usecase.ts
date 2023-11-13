import { Post } from "@/database/models/Post";
import { IPostRepository } from "@/repositories/interface-posts-repository";

interface IRequestCreatePost{
    idUser: string;
    title: string;
    description: string;
    image: string;
    published: boolean;
}

export class CreatePostUseCase{
    constructor(private postRepository: IPostRepository){}

    async execute({
       idUser,
       title,
       description,
       image,
       published
    }: IRequestCreatePost): Promise<Post>{
        // adicionar firebase para subir a imagem.

        // criar post
        const post = await this.postRepository.create({
            idUser,
            title,
            description,
            image,
            published,
        });

        return post;
    }
}