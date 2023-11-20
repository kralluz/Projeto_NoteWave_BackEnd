import { z } from "zod";

export const noteSchema = z.object({
    id: z.number(),
    page_id: z.number(),
    content: z.string(),
    notes_created_at: z.string(),
    notes_updated_at: z.string().nullable(),
});

export const createNoteSchema = noteSchema.pick({
    page_id: true,
    content: true
});

export const updateNoteSchema = noteSchema.partial({
    content: true,
});