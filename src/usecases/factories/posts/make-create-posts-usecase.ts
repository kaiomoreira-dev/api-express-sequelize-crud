import { SequelizePostRepository } from "@/repositories/implementations/sequelize-posts-repository";
import { CreatePostUseCase } from "../../posts/create/create-posts-usecase";

export async function makeCreatePost(): Promise<CreatePostUseCase>{
    const postRepository = new SequelizePostRepository();
    const createPostUseCase = new CreatePostUseCase(postRepository);

    return createPostUseCase;
}