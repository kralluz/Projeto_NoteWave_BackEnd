import { Router } from 'express';
import { NotesController } from '../controllers/note.controller';
import { UserController } from '../controllers/user.controllers';

export const userRoutes: Router = Router();

userRoutes.post('/', UserController.createUser);

userRoutes.get('/:id', UserController.readUserById);
userRoutes.patch('/:id', UserController.updateUserById);
userRoutes.delete('/:id', UserController.deleteUserById);
