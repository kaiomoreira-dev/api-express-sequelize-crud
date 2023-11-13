import { User } from "@/database/models/User";
import { IUserRepository } from "@/repositories/interface-users-repository";

export class ListUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute(): Promise<User[]>{
        const users = await this.userRepository.list();

        return users;
    }
}