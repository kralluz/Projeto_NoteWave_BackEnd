import { Request, Response } from "express";
import {  client } from "./database";

export const readProducts = async (req: Request, res: Response) => {
    const queryString = `
    CREATE TABLE notes (
        id SERIAL PRIMARY KEY,
        tittle VARCHAR(255) NOT NULL,
        conteudo TEXT,
        page_id INT,
        data_criacao TIMESTAMP NOT NULL,
        data_atualizacao TIMESTAMP NOT NULL,
    );
     SELECT * FROM notion_clone; `;
    const movie = await client.query(queryString);
    return res.status(200).json(movie.rows[1]);
};
