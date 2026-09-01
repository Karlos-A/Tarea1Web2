import { AppError } from "../middleware/error.middleware.js";
import {
  findAll, 
  findById,
  create,
  remove,
  update
} from "../repositories/book.repository.js";
import type { Book } from "../types/book.js";

export function getBooks(filters: Record<string, any> = {}) {
  return findAll(filters);
}

export const getBook = (id: number) => {
  const book = findById(id);
  if (!book) {
    throw new AppError("Book not found", 404);
  }
  return book;
}

export const createBook = (book: Book) => {
  const newBook = {
    ...book,
    id:Date.now(),
  };
  return create(newBook);
}

export const deleteBook = (id: number) => {
  const deleted = remove(id);
  if (!deleted) {
    throw new AppError("Book not found", 404);
  }
  return deleted;
}

export const updateBook = (id: number, book: Partial<Book>) => {
  const updated = update(id, book);
  if (!updated) {
    throw new AppError("Book not found", 404);
  }
  return updated;
}