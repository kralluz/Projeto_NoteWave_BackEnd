import { z } from "zod";

export const userSchema = z.object({
    id: z.number().int().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    admin: z.boolean().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
});

export const userResponseSchema = userSchema.pick({
    id: true,
    name: true,
    email: true,
    admin: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
});

export const userCreateSchema = userSchema.pick({
    name: true,
    email: true,
    password: true,
});

export const userReadSchema = userResponseSchema.array();

export const userUpdateSchema = userSchema.partial();

export const userUpdateResponseSchema = userResponseSchema.partial();

export const userCreateResponseSchema = userSchema.pick({
    name: true,
    email: true,
});

export const userLoginSchema = userSchema.pick({
    email: true,
    password: true,
});
