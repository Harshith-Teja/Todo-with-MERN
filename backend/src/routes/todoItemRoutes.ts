import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todoItemController";

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);

export default router;
