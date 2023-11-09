import { Request, Response } from "express";
import {  client } from "./database";

export const readProducts = async (req: Request, res: Response) => {
    const queryString = ` SELECT * FROM notion_clone; `;
    const movie = await client.query(queryString);
    return res.status(200).json(movie.rows[1]);
};
