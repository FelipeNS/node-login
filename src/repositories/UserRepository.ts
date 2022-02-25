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

    const user = repository.create({
      id: uuid(),
      name,
      email,
      password,
      avatar: 'https://i.pravatar.cc/400',
    });

    try {
      await repository.save(user);
      
      return user;
    } catch (error) {
      throw new Error(`An error was occurred on create user: ${error.message}`) ;
    }
  }
}