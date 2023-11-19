import { z } from "zod";
import {
    pageSchema,
    createPageSchema,
    updatePageSchema,
    readAllPageSchema,
} from "../schemas/page.schema";
import { QueryResult } from "pg";

export interface Page extends z.infer<typeof pageSchema> {}

export interface CreatePage extends z.infer<typeof createPageSchema> {}

export interface ReadAllPage extends z.infer<typeof readAllPageSchema> {}

export interface UpdatePage extends z.infer<typeof updatePageSchema> {}

export interface PageResult extends QueryResult<Page> {}
