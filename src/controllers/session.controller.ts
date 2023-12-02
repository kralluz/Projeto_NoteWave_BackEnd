import { Request, Response } from "express";
import { SessionService } from "../services/session.services";

class sessionController {
    static async startSession(req: Request, res: Response) {
        const token = await SessionService.startSession(req.body);
        console.log("🚀 ~ file: session.controller.ts:7 ~ sessionController ~ startSession ~ token:", token)
        console.log("🚀 ~ file: session.controller.ts:7 ~ sessionController ~ startSession ~ token:", token)
        console.log("🚀 ~ file: session.controller.ts:7 ~ sessionController ~ startSession ~ token:", token)
        return res.status(200).json(token)
    }
}

export { sessionController };