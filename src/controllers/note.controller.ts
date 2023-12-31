import { Request, Response } from "express";
import { NotesService } from "../services/note.services";

class NotesController {
    static async createNotesByPageId(req: Request, res: Response) {
        const content = req.body.content;
        const page_id = req.body.page_id;
        const response = await NotesService.createNotesByPageId(page_id, content);
        return res.status(201).json(response);
    }

    static async readNotesByPageId(req: Request, res: Response) {
        const pageId = String(req.query.pageId);
        const noteId = String(req.query.noteId);
        const response = await NotesService.readNotesByPageId(pageId, noteId);
        return res.status(200).json(response);
    }

    static async readAllNotesByPageId(req: Request, res: Response) {
        const id = req.params.id;
        const response = await NotesService.readAllNotesByPageId(id);
        return res.status(200).json(response);
    }

    static async updateNotesById(req: Request, res: Response) {
        const noteId: string = req.params.id;
        const content = req.body.content;
        const response = await NotesService.updateNotesById(noteId, content);
        return res.status(200).json(response);
    }

    static async deleteNotesById(req: Request, res: Response) {
        const id = req.params.id;
        const response = await NotesService.deleteNotesById(id);
        return res.status(204).json(response);
    }
}

export { NotesController };
