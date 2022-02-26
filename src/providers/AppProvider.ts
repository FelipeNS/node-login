import { AuthController } from "../controllers/AuthController";
import { UserController } from "../controllers/UserController";
import { AuthRepository } from "../repositories/AuthRepository";
import { UserRepository } from "../repositories/UserRepository"
import { AuthService } from "../services/AuthService";
import { CreateUserService } from "../services/CreateUserService";

const userRepository = new UserRepository();
const createUserService = new CreateUserService(userRepository);
const userController = new UserController(createUserService);

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

export { userController, authController };