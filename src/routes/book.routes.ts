import { Router } from "express";
import { create, getAllBooks, getOne, remove, update } from "../controllers/book.controller.js";
import { validateBook } from "../middleware/validateBook.middleware.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getOne);
router.post("/", validateBook, create);
router.delete("/:id", remove);
router.patch("/:id", update);

export default router;
