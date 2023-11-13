import { SequelizeUserRepository } from "@/repositories/implementations/sequelize-users-repository";
import { CreateUserUseCase } from "../../users/create/create-users-usecase";

export async function makeCreateUser(): Promise<CreateUserUseCase>{
    const userRepository = new SequelizeUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    return createUserUseCase;
}