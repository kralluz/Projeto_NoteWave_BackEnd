import { Request, Response } from "express";
import { PageService } from "../services/pages.service";

class pagesController {
    static async createPageByUserId(req: Request, res: Response) {
        const user_id = req.body.user_id;
        const title = req.body.title;
        const dad_id = req.body.dad_id;
        const response = await PageService.createPageByUserId(
            user_id,
            dad_id,
            title
        );
        return res.status(201).json(response);
    }

    static readPageByUserId(req: Request, res: Response) {
        return res.status(200).json({ message: "readPageByUserId" });
    }

    static async readAllPagesByUserId(req: Request, res: Response) {
        const id = req.params.id;
        const response = await PageService.readAllPagesByUserId(id);
        return res.status(200).json(response);
    }

    static async updatePageByUserId(req: Request, res: Response) {
        const id = req.params.id;
        const title = req.body.title;
        const response = await PageService.updatePageByUserId(id, title);
        return res.status(200).json(response);
    }

    static async deletePageByUserId(req: Request, res: Response) {
        const id = req.params.id;
        const response = await PageService.deletePageByUserId(id);
        return res.status(204);
    }
}

export { pagesController };
