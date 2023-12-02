import { Router } from "express";
import { pagesController } from "../controllers/page.controller";
import { apiRateLimiter } from "../middlewares/apiRateLimiter.middleware";
import {
    bodyValidation,
    validatePagesId,
} from "../middlewares/globals.middleware";
import { createPageSchema } from "../schemas/page.schema";

export const pageRoutes: Router = Router();

pageRoutes.post(
    "/",
    bodyValidation(createPageSchema),
    apiRateLimiter,
    pagesController.createPageByUserId
);

pageRoutes.get( "/page", apiRateLimiter, pagesController.readPageByUserId);

pageRoutes.get(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.readAllPagesByUserId
);

pageRoutes.patch(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.updatePageByUserId
);

pageRoutes.delete(
    "/:id",
    apiRateLimiter,
    validatePagesId,
    pagesController.deletePageByUserId
);