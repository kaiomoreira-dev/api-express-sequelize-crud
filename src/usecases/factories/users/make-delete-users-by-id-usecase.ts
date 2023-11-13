import { SequelizeUserRepository } from "@/repositories/implementations/sequelize-users-repository";
import { DeleteUserUseCase } from "../../users/delete-by-id/delete-users-usecase";

export async function makeDeleteUserById(): Promise<DeleteUserUseCase>{
    const userRepository = new SequelizeUserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);

    return deleteUserUseCase;
}