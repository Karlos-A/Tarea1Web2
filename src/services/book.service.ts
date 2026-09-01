import {
  findAll, 
  findById,
  create,
  remove,
} from "../repositories/book.repository.js";
import type { Book } from "../types/book.js";

export function getBooks() {
  return findAll();
}

export const getBook = (id: number) => {
  return findById(id);
}

export const createBook = (book: Book) => {
  const newBook = {
    ...book,
    id:Date.now(),
  };
  return create(newBook);
}

export const deleteBook = (id: number) => {
  return remove(id);
}

