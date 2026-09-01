import type { Request, Response, NextFunction } from "express";
import {
  getBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook
} from "../services/book.service.js";

export function getAllBooks(req: Request, res: Response) {
  const filters = req.query;
  res.json(getBooks(filters));
}

export const getOne = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const book = getBook(id);
    res.json(book);
  } catch (error) {
    next(error);
  }
};

export const create = (req: Request, res: Response) => {
  const newBook = createBook(req.body);
  res.status(201).json(newBook);
}

export const remove = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const deleted = deleteBook(id);
  if (!deleted) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(204).send();
}

export const update = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = updateBook(id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(updated);
}