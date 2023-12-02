import { Request, Response } from "express";
import { UserService } from "../services/user.services";

class UserController {
    static async createUser(req: Request, res: Response) {
        const body = req.body;
        const response = await UserService.createUsers(body);
        return res.status(201).json(response);
    }

    static async readUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const response = await UserService.readUserById(userId);
        return res.status(200).json(response);
    }

    static async updateUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const updateFields = req.body;
        const response = await UserService.updateUserById(userId, updateFields);
        return res.status(200).json(response);
    }

    static async deleteUserById(req: Request, res: Response) {
        const id = req.params.id;
        const response = await UserService.deleteUserById(id);
        return res.status(204).json(response);
    }
}

export { UserController };
