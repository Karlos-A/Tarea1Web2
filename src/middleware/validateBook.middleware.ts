import type { Request, Response, NextFunction } from "express";

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
    const { title, author, year } = req.body;
    if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ 
      error: true, 
      message: "Title is required and cannot be empty or only spaces" 
    });
  }

  if (!author || typeof author !== "string" || author.trim() === "") {
    return res.status(400).json({ 
      error: true, 
      message: "Author is required and cannot be empty" 
    });
  }

  if (year === undefined || typeof year !== "number") {
    return res.status(400).json({ 
      error: true, 
      message: "Year is required and must be a valid number" 
    });
  }
    next();
}