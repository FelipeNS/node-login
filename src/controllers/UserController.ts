import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class UserController {
  constructor(
    private createUserService: CreateUserService,
  ) {}

  async store(request: Request, response: Response) {
    const { name, email, password } = request.body;

    try {
      const user = await this.createUserService.execute({
        name,
        email,
        password,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({
        message: error.message,
      });
    }
  }
}