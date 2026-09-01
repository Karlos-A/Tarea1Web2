import type { Request, Response, NextFunction } from "express";

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
    const { title, author, year } = req.body;
    if(!title || !author || !year) {
        return res.status(400).json({ message: "Title, author, and year are required" });
    }
    next();
}