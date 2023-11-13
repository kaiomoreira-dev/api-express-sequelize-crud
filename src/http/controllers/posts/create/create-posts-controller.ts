import { makeCreatePost } from "@/usecases/factories/posts/make-create-posts-usecase";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class CreatePostController{
    async handle(request: Request, response: Response, next: NextFunction){
        try {
            const postSchema = z.object({
                idUser: z.string().uuid(),
                title: z.string(), 
                description: z.string(), 
                image: z.string(),
                published: z.coerce.boolean(),
              })
  
              const { 
                  idUser,
                  title,
                  description,
                  image,
                  published,
              } = postSchema.parse(request.body)

            const createPostUseCase = await makeCreatePost();

            const post = await createPostUseCase.execute({
                  idUser,
                  title,
                  description,
                  image,
                  published,
            });

        return response.status(201).json(post);
        } catch (error) {
            next(error)
        }
    }
}