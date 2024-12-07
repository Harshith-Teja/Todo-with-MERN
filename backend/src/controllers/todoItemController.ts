import { Request, Response } from "express";
import Todos from "../models/todoItemModel";

//GET all todos
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todolist = await Todos.find();

    res.status(200).json(todolist);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

//CREATE a todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { item, checked } = req.body;

    const newTodoItem = new Todos({ item, checked });
    const savedTodoItem = await newTodoItem.save();

    res.status(201).json(savedTodoItem);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

//UPDATE a todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const todoItem = await Todos.findOne({ _id: id }).exec();

    if (todoItem != null) todoItem.checked = req.body.checked;

    const updatedTask = await todoItem?.save();

    res.status(201).json(updatedTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

//DELETE a todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Todos.findByIdAndDelete(id);

    res.status(200).json({ message: "TodoItem deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
