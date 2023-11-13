import { makeCreateUser } from "@/usecases/factories/users/make-create-users-usecase";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class CreateUserController{
    async handle(request: Request, response: Response, next: NextFunction){
        try {
            const userSchema = z.object({
                name: z.string().min(4), 
                email: z.string().email(), 
                password: z.string().min(6),
                phone: z.string().min(11),
              })
  
              const { 
                  email, 
                  password,
                  name,
                  phone
              } = userSchema.parse(request.body)

            const createUserUseCase = await makeCreateUser();

            const user = await createUserUseCase.execute({
                name,
                email,
                password,
                phone
            });

        return response.status(201).json(user);
        } catch (error) {
            next(error)
        }
    }
}