import { IUserRepository } from "@/repositories/interface-users-repository";
import { AppError } from "@/usecases/errors/AppError";

interface IRequestDeleteUser{
    id: string;
}

export class DeleteUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute({
        id
    }: IRequestDeleteUser): Promise<void>{
        // buscar usuário pelo id
        const findUserExist = await this.userRepository.findById(id);

        // validar se o usuário existe
        if(!findUserExist){
            throw new AppError('Usuário não encontrado', 404);
        }

        // deletar usuário
        await this.userRepository.deleteById(id);
    }
}