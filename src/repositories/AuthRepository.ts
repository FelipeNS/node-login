import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { uuid } from "uuidv4";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IAuth } from "../interfaces/IAuth";
import { User } from "../models/User";

export class AuthRepository implements IAuth {
  async login({ email, password }: ICreateUserDTO): Promise<User> {
    const repository = getRepository(User);

    const user = await repository.findOne({ where: { email } });

    if(!user) {
      throw new Error('Incorrect email or password');
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error('Incorrect email or password');
    }
    
    user.token = sign({}, process.env.JWT_KEY, {
      subject: user.id,
      expiresIn: '1h'
    });

    delete user.password;

    return user;
  }
}