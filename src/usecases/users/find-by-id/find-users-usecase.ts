import { User } from "@/database/models/User";
import { IUserRepository } from "@/repositories/interface-users-repository";
import { AppError } from "@/usecases/errors/AppError";

interface IRequestFindUser{
    id: string;
}

export class FindUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute({
        id
    }: IRequestFindUser): Promise<User>{
        // buscar usuário pelo id
        const findUserExist = await this.userRepository.findById(id);

        // validar se o usuário existe
        if(!findUserExist){
            throw new AppError('Usuário não encontrado', 404);
        }

        return findUserExist;
    }
}