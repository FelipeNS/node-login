import { UserController } from "../controllers/UserController";
import { UserRepository } from "../repositories/UserRepository"
import { CreateUserService } from "../services/CreateUserService";

const userRepository = new UserRepository();

const createUserService = new CreateUserService(userRepository);

const userController = new UserController(createUserService);

export { userController };