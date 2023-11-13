import { makeListUser } from "@/usecases/factories/users/make-list-users-usecase copy";
import { NextFunction, Request, Response } from "express";

export class ListUserController{
    async handle(request: Request, response: Response, next: NextFunction){
        try {
            const listUsersUseCase = await makeListUser();

            const users = await listUsersUseCase.execute();

        return response.status(201).json(users);
        } catch (error) {
            next(error)
        }
    }
}