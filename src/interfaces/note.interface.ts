import { z } from 'zod';
import { noteSchema } from '../schemas/note.schema';
import { QueryResult } from 'pg';

export interface Note extends z.infer<typeof noteSchema> {};

export interface CreateNote extends z.infer<typeof noteSchema> {};

export type ReadAllNotes = Note[];

export interface UpdateNote extends z.infer<typeof noteSchema> {};

export interface NoteResult extends QueryResult<Note> {};