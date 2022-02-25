import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { hash } from "bcryptjs";

export class UserController {
  constructor(
    private createUserService: CreateUserService,
  ) {}

  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const passwordHashed = await hash(password, 8);

    const user = await this.createUserService.execute({
      name,
      email,
      password: passwordHashed
    });

    return response.status(201).json(user);
  }
}