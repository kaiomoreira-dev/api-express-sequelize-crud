import { User, UserAttributes } from "../database/models/User"

export interface IUserRepository{
    create(data: UserAttributes): Promise<UserAttributes>
    findByEmail(email: string): Promise<UserAttributes | null>
    findById(id: string): Promise<UserAttributes | null>
    list(): Promise<UserAttributes[]>
    updateById(data: UserAttributes): Promise<any>
    deleteById(id: string): Promise<void>
}