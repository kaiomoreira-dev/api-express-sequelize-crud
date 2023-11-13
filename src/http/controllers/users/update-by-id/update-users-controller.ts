import { makeUpdateUser } from "@/usecases/factories/users/make-update-users-usecase";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class UpdateUserController{
    async handle(request: Request, response: Response, next: NextFunction){
        try {
            const userSchema = z.object({
                id: z.string().uuid(),
                name: z.string().min(4), 
                email: z.string().email(), 
                phone: z.string().min(11),
              })
  
              const { 
                  id,
                  email, 
                  name,
                  phone
              } = userSchema.parse(request.body)

            const updateUserUseCase = await makeUpdateUser();

            const user = await updateUserUseCase.execute({
                id,
                name,
                email,
                phone
            });

        return response.status(201).json(user);
        } catch (error) {
            next(error)
        }
    }
}