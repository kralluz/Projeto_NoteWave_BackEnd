import { Request, Response } from "express";
import { NotesService } from "../services/notes.service";

class NotesController {
    static async readNotesByPageId(req: Request, res: Response) {
        const id = req.params.id;
        const response = await NotesService.readAllNotesByPageId(id);
        return res.status(200).json(response);
    }

    static async createNotesByPageId(req: Request, res: Response) {
        const content = req.body.content;
        const page_id = req.body.page_id;
        const response = await NotesService.createNotesByPageId(page_id, content);
        return res.status(201).json(response);
    }
}

export { NotesController };
