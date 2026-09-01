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
  {
    id: 3,
    title: "Cadáver Exquisito",
    author: "Agustina Bazterrica",
    year: 2017,
  },
  {
    id: 4,
    title: "It",
    author: "Stephen King",
    year: 1986,
  },
  {
    id: 5,
    title: "Book example lol",
    author: "Me",
    year: 2027,
  },
];

//Repository es solamente para trabajar con los datos desde queries

export function findAll(filters: Record<string, any> = {}): Book[] {
  let results = books;
  if (filters.title) {
    results = results.filter((book) =>
      book.title.toLowerCase().includes(filters.title.toLowerCase())
    );
  }
  if (filters.author) {
    results = results.filter((book) =>
      book.author.toLowerCase().includes(filters.author.toLowerCase())
    );
  }
  if (filters.year) {
    results = results.filter((book) =>
      book.year === Number(filters.year)
    );
  }
  return results;
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

// PATCH
export const update = (id: number, book: Partial<Book>) => {
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...book, id };
  return books[index];
}