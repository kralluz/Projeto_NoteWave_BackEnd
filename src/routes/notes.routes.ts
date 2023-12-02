import { Router } from 'express';
import {  bodyValidation, validateNotesId } from '../middlewares/globals.middleware';
import { apiRateLimiter } from '../middlewares/apiRateLimiter.middleware';
import { NotesController } from '../controllers/note.controller';
import { createNoteSchema } from '../schemas/note.schema';

export const noteRoutes: Router = Router();

noteRoutes.post('/', bodyValidation(createNoteSchema), apiRateLimiter, NotesController.createNotesByPageId);
noteRoutes.get('/note', apiRateLimiter, NotesController.readNotesByPageId);
noteRoutes.get('/:id',validateNotesId, apiRateLimiter, NotesController.readAllNotesByPageId);
noteRoutes.patch('/:id',validateNotesId, apiRateLimiter, NotesController.updateNotesById);
noteRoutes.delete('/:id',validateNotesId, apiRateLimiter, NotesController.deleteNotesById);
