import { Router } from 'express';
import {  bodyValidation, validateNotesId } from '../middlewares/globals.middleware';
import { apiRateLimiter } from '../middlewares/apiRateLimiter.middleware';
import { NotesController } from '../controllers/notes.controller';
import { createNoteSchema } from '../schemas/note.schema';

export const notesRoutes: Router = Router();

notesRoutes.post('/', bodyValidation(createNoteSchema), apiRateLimiter, NotesController.createNotesByPageId);
notesRoutes.get('/note', apiRateLimiter, NotesController.readNotesByPageId);
notesRoutes.get('/:id',validateNotesId, apiRateLimiter, NotesController.readAllNotesByPageId);
notesRoutes.patch('/:id',validateNotesId, apiRateLimiter, NotesController.updateNotesById);
notesRoutes.delete('/:id',validateNotesId, apiRateLimiter, NotesController.deleteNotesById);
