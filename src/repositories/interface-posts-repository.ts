import { Post, PostAttributes } from "../database/models/Post"

export interface IPostRepository{
    create(data: PostAttributes): Promise<Post>
    deleteById(id: string): Promise<void>
}