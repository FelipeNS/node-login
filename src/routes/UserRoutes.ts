import { Router } from "express";
import { userController } from "../providers/AppProvider";

const userRouter = Router();

userRouter.post('/', (request, response) => {
  return userController.store(request, response);
});

export { userRouter };