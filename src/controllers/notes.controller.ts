import { Request, Response } from "express";
import { NotesService } from "../services/notes.service";

class NotesController {
    static async read(req: Request, res: Response) {
        const response = await NotesService.read;
        return res.status(201).json(response);
    }

    static async create(req: Request, res: Response) {
/*         const response = await createNotesService();
        return res.status(201).json(response); */
    }
}

export { NotesController };
