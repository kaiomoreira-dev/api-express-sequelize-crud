import { SequelizeUserRepository } from "@/repositories/implementations/sequelize-users-repository";
import { UpdateUserUseCase } from "../../users/update-by-id/update-users-usecase";

export async function makeUpdateUser(): Promise<UpdateUserUseCase>{
    const userRepository = new SequelizeUserRepository();
    const updateUserUseCase = new UpdateUserUseCase(userRepository);

    return updateUserUseCase;
}