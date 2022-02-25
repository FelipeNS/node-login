import "express-async-errors";
import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.status(500).json({
    message: error.message
  });
});

export { app };