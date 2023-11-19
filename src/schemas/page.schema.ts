import { z } from "zod";
import { noteSchema } from "./note.schema";

export const pageSchema = z.object({
    id: z.string().uuid(),
    dad_id: z.string().uuid().nullable(),
    user_id: z.string().uuid(),
    title: z.string(),
    page_created_at: z.string(),
    page_updated_at: z.string(),
    notes: z.array(noteSchema),
});

export const createPageSchema = pageSchema.omit({
    id: true,
    page_created_at: true,
    page_updated_at: true,
});

export const readAllPageSchema = z.array(pageSchema.omit({notes: true}));

export const updatePageSchema = pageSchema.omit({
    title: true,
});
