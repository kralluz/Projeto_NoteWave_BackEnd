import { z } from "zod";

export const userSchema = z.object({
    id: z.number().int().positive(),
    is_admin: z.boolean().optional(),
    username: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
});

export const userResponseSchema = z.object({
    id: z.number().int().positive(),
    is_admin: z.boolean().optional(),
    username: z.string().max(45),
    email: z.string().max(45).email(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable(),
});

export const createUserSchema = userSchema.pick({
    username: true,
    email: true,
    password: true,
});

export const readAllUsersSchema = userResponseSchema.array();

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
