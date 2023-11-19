import { z } from "zod";

export const noteSchema = z.object({
    id: z.string().uuid(),
    content: z.string(),
    page_id: z.string().uuid(),
    notes_created_at: z.string(),
    notes_updated_at: z.string().nullable(),
});

export const createNoteSchema = noteSchema.omit({
    id: true,
    notes_created_at: true,
});

export const updateNoteSchema = noteSchema.omit({
    content: true,
    notes_updated_at: true
});