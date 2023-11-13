import { UserAttributes } from "@/database/models/User";
import { IUserRepository } from "@/repositories/interface-users-repository";
import { AppError } from "@/usecases/errors/AppError";

interface IRequestCreateUser{
    name: string;
    email: string;
    password: string;
    phone: string;
}

export class CreateUserUseCase{
    constructor(private userRepository: IUserRepository){}

    async execute({
        name,
        email,
        password,
        phone
    }: IRequestCreateUser): Promise<UserAttributes>{
        // buscar usuário pelo email
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        // validar se o usuário existe
        if(userAlreadyExists){
            throw new AppError('Usuário já existe', 409);
        }

        const user = await this.userRepository.create({
            name,
            email,
            password,
            phone
        });

        return user;
    }
}