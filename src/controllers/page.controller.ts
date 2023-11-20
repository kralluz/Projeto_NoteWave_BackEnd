import { Request, Response } from "express";
import { PageService } from "../services/pages.service";

class pagesController {
    static async readAllPagesByUserId(req: Request, res: Response) {
        const id = req.params.id;
        const response = await PageService.readAllPagesByUserId(id);
        return res.status(200).json(response);
    }

    static async createPageByUserId(req: Request, res: Response) {
        const user_id = req.body.user_id;
        const title = req.body.title;
        const dad_id = req.body.dad_id;
        const response = await PageService.createPageByUserId(user_id, dad_id, title);
        return res.status(201).json(response);
    }
}

export { pagesController };
