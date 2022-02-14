import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../models/User";

export interface IUser {
  store(user: ICreateUserDTO): Promise<User>;
}