import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ZodTypeAny } from "zod";
import { QueryResult } from "pg";
import { client } from "../database";

export const bodyValidation =
    (schema: ZodTypeAny) =>
    (req: Request, res: Response, next: NextFunction): void => {
        if (req.body.value) req.body.value = Number(req.body.value);
        req.body = schema.parse(req.body);
        return next();
    };

export const verifyAdmin = (
    req: Request,
    res: Response,
    next: NextFunction
): void | Response => {
    const { admin } = res.locals.decoded;

    if (!admin) return res.status(403).json({ error: "Insufficient permission" });

    return next();
};

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
):void | Response => {
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(403).json({ error: "Missing bearer token" });

    const token: string = authorization.split(" ")[1];
    const decoded = verify(token, process.env.SECRET_KEY!);

    res.locals = { ...res.locals, decoded };
    return next();
};

export const verifyPermissions = (
    req: Request,
    res: Response,
    next: NextFunction
):void | Response => {
    const { id } = req.params;
    const { sub, admin } = res.locals.decoded;

    if (admin) return next();

    if (id !== sub) return res.status(403).json({ error: "Insufficient permission" });

    return next();
};

export const validatePageId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const id = req.params.id;

    if (!id || isNaN(Number(id))) return res.status(400).json({ error: "ID must be numeric" });

    const queryString = `
    SELECT * FROM page WHERE id = $1;
    `;
    const queryResult: QueryResult = await client.query(queryString, [id]);

    if(queryResult.rowCount === 0) return res.status(404).json({ error: "Page not found" });

    next();
};
