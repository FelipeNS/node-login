import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class UserController {
  constructor(
    private createUserService: CreateUserService,
  ) {}

  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const user = await this.createUserService.execute({
      name,
      email,
      password
    });

    return response.status(201).json(user);
  }
}