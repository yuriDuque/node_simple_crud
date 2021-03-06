import { Request, Response } from "express";
import SettingsService from "../services/SettingsService";

export default class SettingsController {
    async create(req: Request, res: Response) {
        const { chat, username } = req.body;

        try {
            const service = new SettingsService();

            const setting = await service.insert({chat, username});

            return res.json(setting);
        }
        catch (ex) {
            return res.status(400).json({
                error: true,
                message: ex.message
            })
        }
    }
}