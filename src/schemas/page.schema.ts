import { z } from "zod";
import { noteSchema } from "./note.schema";

export const pageSchema = z.object({
    id: z.number(),
    dad_id: z.number(),
    user_id: z.number(),
    title: z.string(),
    page_created_at: z.string(),
    page_updated_at: z.string(),
    notes: z.array(noteSchema),
});

export const createPageSchema = pageSchema.pick({
    user_id: true,
    dad_id: true,
    title: true
});

export const readAllPageSchema = z.array(pageSchema.omit({notes: true}));

export const updatePageSchema = pageSchema.omit({
    title: true,
});
