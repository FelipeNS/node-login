import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUser } from "../interfaces/IUser";

export class CreateUserService {
  constructor(
    private userRepository: IUser
  ) {}

  async execute(data: ICreateUserDTO) {
    return this.userRepository.store(data);
  }
}