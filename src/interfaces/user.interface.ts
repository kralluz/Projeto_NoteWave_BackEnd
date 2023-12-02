import { z } from "zod";
import {
    userSchema,
    createUserSchema,
    readAllUsersSchema,
    userUpdateSchema,
    userResponseSchema
} from "../schemas/user.schema";
import { QueryResult } from "pg";

export interface User extends z.infer<typeof userSchema> {}

export interface CreateUser extends z.infer<typeof createUserSchema> {}

export interface ReadUser extends z.infer<typeof userResponseSchema> {}

export interface ReadAllUser extends z.infer<typeof readAllUsersSchema> {}

export interface UpdateUser extends z.infer<typeof userUpdateSchema> {}

export interface UserResult extends QueryResult<User> {}
