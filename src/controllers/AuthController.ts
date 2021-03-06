import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  constructor(
    private authService: AuthService,
  ) {}

  async login(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await this.authService.execute({
      email,
      password
    });

    return response.status(200).json(user);
  }
}