import { IAuthDTO } from "../dtos/IAuthDTO";
import { User } from "../models/User";

export interface IAuth {
  login(user: IAuthDTO): Promise<User>;
}