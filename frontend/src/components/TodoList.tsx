import TodoItem from "./TodoItem";
import { TodoItemType } from "../types/TodoItemType";
import { useEffect, useState } from "react";
import { createTask, getTasks } from "../api/todoApi";
import { v4 as uuid } from "uuid";

const TodoList = async () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTasks();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const addTask = async () => {
    const id: string = uuid();

    // const data =
    await createTask({ item: newTodo, checked: false });
  };

  return (
    <div className="bg-red-400 w-[30%] p-8">
      <h1 className="font-bold text-3xl text-center">Todo List</h1>
      <div className="flex my-4 gap-4">
        <input
          type="text"
          placeholder="type your task"
          className="p-4 rounded-lg w-full"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="rounded-lg p-4 bg-gray-400" onClick={addTask}>
          +
        </button>
      </div>
      {todos.map((item) => (
        <TodoItem
          key={item._id}
          item={item.item}
          checked={item.checked}
          _id={item._id}
        />
      ))}
    </div>
  );
};

export default TodoList;
