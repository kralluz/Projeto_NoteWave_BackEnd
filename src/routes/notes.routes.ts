import { Router } from 'express';
import {  bodyValidation, validateNotesId } from '../middlewares/globals.middleware';
import { apiRateLimiter } from '../middlewares/apiRateLimiter.middleware';
import { NotesController } from '../controllers/notes.controller';
import { createNoteSchema } from '../schemas/note.schema';

export const notesRoutes = Router();

notesRoutes.post('/', bodyValidation(createNoteSchema), apiRateLimiter, NotesController.createNotesByPageId);
notesRoutes.get('/:id',validateNotesId, apiRateLimiter, NotesController.readNotesByPageId);
