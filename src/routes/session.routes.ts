import { Router } from "express";
import { sessionController } from "../controllers/session.controller";

export const sessionRouter: Router = Router()

sessionRouter.post('/', sessionController.startSession)