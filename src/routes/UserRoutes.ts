import { Router } from "express";
import { authController, userController } from "../providers/AppProvider";

const userRouter = Router();

userRouter.post('/', (request, response) => {
  return userController.store(request, response);
});

userRouter.get('/auth', (request, response) => {
  return authController.login(request, response);
});

export { userRouter };