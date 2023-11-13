import { User } from "@/database/models/User";
import { IUserRepository } from "@/repositories/interface-users-repository";
import { AppError } from "@/usecases/errors/AppError";

interface IRequestUpdateUser{
    id: string;
    name: string;
    email: string;
    phone: string;
}

export class UpdateUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute({
        id,
        name,
        email,
        phone
    }: IRequestUpdateUser): Promise<User>{
        // buscar usuário pelo email
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        // validar se o usuário existe
        if(userAlreadyExists){
            throw new AppError('Usuário já existe', 409);
        }

        const user = await this.userRepository.updateById({
            id,
            name,
            email,
            phone
        });

        return user;
    }
}