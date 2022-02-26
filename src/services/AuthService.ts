import { IAuthDTO } from "../dtos/IAuthDTO";
import { IAuth } from "../interfaces/IAuth";

export class AuthService {
  constructor(
    private authRepository: IAuth
  ) {}

  async execute(data: IAuthDTO) {
    return this.authRepository.login(data);
  }
}