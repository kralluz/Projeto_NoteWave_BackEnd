import { Router } from "express";
import { pagesController } from "../controllers/page.controller";
import { apiRateLimiter } from "../middlewares/apiRateLimiter.middleware";
import {
    bodyValidation,
    validatePagesId,
} from "../middlewares/globals.middleware";
import { createPageSchema } from "../schemas/page.schema";

export const pagesRoutes: Router = Router();

pagesRoutes.post(
    "/",
    bodyValidation(createPageSchema),
    apiRateLimiter,
    pagesController.createPageByUserId
);

// pagesRoutes.get( "/:id", apiRateLimiter, validatePagesId, pagesController.readPageByUserId);

pagesRoutes.get(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.readAllPagesByUserId
);

pagesRoutes.patch(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.updatePageByUserId
);

pagesRoutes.delete(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.deletePageByUserId
);