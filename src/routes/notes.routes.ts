import { Router } from 'express';
import { PagesController } from '../controllers/notes.controller';
import { validatePageId } from '../middlewares/globals.middleware';
import { apiRateLimiter } from '../middlewares/apiRateLimiter.middleware';

export const pageRoutes = Router();

pageRoutes.get('/:id',validatePageId, apiRateLimiter, PagesController.readById);
