import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { uuid } from "uuidv4";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUser } from "../interfaces/IUser";
import { User } from "../models/User";

export class UserRepository implements IUser {
  async store({ name, email, password }: ICreateUserDTO): Promise<User> {
    const repository = getRepository(User);

    const userAlreadyExists = await repository.find({ where: { email } });

    if(userAlreadyExists.length) {
      throw new Error('User already exists');
    }

    const passwordHashed = await hash(password, 8);

    const user = repository.create({
      id: uuid(),
      name,
      email,
      password: passwordHashed,
      avatar: 'https://i.pravatar.cc/400',
    });

    try {
      await repository.save(user);
      
      user.token = sign({}, process.env.JWT_KEY, {
        subject: user.id,
        expiresIn: '1h'
      });

      delete user.password;
      
      return user;
    } catch (error) {
      throw new Error(`An error was occurred on create user: ${error.message}`) ;
    }
  }
}