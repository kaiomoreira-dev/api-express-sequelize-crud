import { makeDeleteUserById } from "@/usecases/factories/users/make-delete-users-by-id-usecase";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export class DeleteUserController{
    async handle(request: Request, response: Response, next: NextFunction){
        try {
            const userSchema = z.object({
                id: z.string().uuid(), 
              })
  
              const { 
                  id, 
              } = userSchema.parse(request.params)

            const deleteUserByIdUseCase = await makeDeleteUserById();

            await deleteUserByIdUseCase.execute({
                id
            });

        return response.status(201).json({message: 'Usuário deletado com sucesso'});
        } catch (error) {
            next(error)
        }
    }
}