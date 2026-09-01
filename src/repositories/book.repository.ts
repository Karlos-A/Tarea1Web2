import type { Book } from "../types/book.js";

let books: Book[] = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 1992,
  },
  {
    id: 2,
    title: "Design Patterns",
    author: "Erich Gamma",
    year: 1994,
  },
];

//Repository es solamente para trabajar con los datos desde queries

export function findAll(): Book[] {
  return books;
}

//Get a book by id Query
export const findById = (id: number) => books.find((book) => book.id === id);

//Post new book
export const create = (book: Book) => {
  books.push(book);
  return book;
}

//DELETE
export const remove = (id: number) => {
  const exists = books.find((book) => book.id === id);
  if (!exists) return false;
  books = books.filter((book) => book.id !== id);
  return true;
}