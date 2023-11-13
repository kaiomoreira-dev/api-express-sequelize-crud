import { makeFindUserById } from "@/usecases/factories/users/make-find-users-by-id-usecase";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class FindUserController{
    async handle(request: Request, response: Response, next: NextFunction){
        try {
            const userSchema = z.object({
                id: z.string().uuid(), 
              })
  
              const { 
                  id, 
              } = userSchema.parse(request.params)

            const findUserByIdUseCase = await makeFindUserById();

            const user = await findUserByIdUseCase.execute({
                id
            });

        return response.status(201).json(user);
        } catch (error) {
            next(error)
        }
    }
}