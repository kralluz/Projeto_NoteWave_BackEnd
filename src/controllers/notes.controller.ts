import { Request, Response } from "express";
import { PagesService } from "../services/notes.service";

class PagesController {
    static async readById(req: Request, res: Response) {
        const id = req.params.id;
        const response = await PagesService.readById(id);
        return res.status(200).json(response);
    }

    static async create(req: Request, res: Response) {
        /*const response = await createNotesService();
        return res.status(201).json(response); */
    }
}

export { PagesController };
