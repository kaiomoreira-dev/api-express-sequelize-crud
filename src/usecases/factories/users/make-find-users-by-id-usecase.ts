import { SequelizeUserRepository } from "@/repositories/implementations/sequelize-users-repository";
import { FindUserUseCase } from "../../users/find-by-id/find-users-usecase";

export async function makeFindUserById(): Promise<FindUserUseCase>{
    const userRepository = new SequelizeUserRepository();
    const findUserUseCase = new FindUserUseCase(userRepository);

    return findUserUseCase;
}