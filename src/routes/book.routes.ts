import { Router } from "express";
import { create, getAllBooks, getOne, remove, update } from "../controllers/book.controller.js";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getOne);
router.post("/", create);
router.delete("/:id", remove);
router.patch("/:id", update);

export default router;
