import { Router } from "express";
import { pagesController } from "../controllers/page.controller";
import { apiRateLimiter } from "../middlewares/apiRateLimiter.middleware";
import { bodyValidation, validatePagesId } from "../middlewares/globals.middleware";
import { createPageSchema } from "../schemas/page.schema";

export const pagesRoutes = Router();

pagesRoutes.post("/",bodyValidation(createPageSchema), apiRateLimiter, pagesController.createPageByUserId);

pagesRoutes.get(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.readAllPagesByUserId
);
