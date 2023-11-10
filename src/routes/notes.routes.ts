import { Router } from 'express';
import { NotesController } from '../controllers/notes.controller';

export const notesRoutes = Router();

notesRoutes.get('/', NotesController.read);

notesRoutes.post('/', NotesController.create);