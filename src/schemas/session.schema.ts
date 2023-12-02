import { z } from "zod";
import { userSchema } from "./user.schema";

export const sessionSchema = userSchema.pick({
    username: true,
    password: true,
});
