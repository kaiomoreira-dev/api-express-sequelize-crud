import { SequelizeUserRepository } from "@/repositories/implementations/sequelize-users-repository";
import { ListUserUseCase } from "../../users/list/list-users-usecase";

export async function makeListUser(): Promise<ListUserUseCase>{
    const userRepository = new SequelizeUserRepository();
    const listUserUseCase = new ListUserUseCase(userRepository);

    return listUserUseCase;
}