import TodoItem from "./TodoItem";
import { TodoItemType } from "../types/TodoItemType";
import { useEffect, useState } from "react";
import { createTask, getTasks } from "../api/todoApi";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTasks();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const addTodo = async () => {
    const createdTodo = await createTask({ item: newTodo, checked: false });
    setTodos((prev) => [...prev, createdTodo]);
    setNewTodo("");
  };

  return (
    <div className="w-[30%] p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <h1 className="font-bold text-3xl text-center">Todo List</h1>
      <div className="flex my-4 gap-4">
        <input
          type="text"
          placeholder="type your task"
          className="p-4 rounded-lg w-full"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="rounded-lg p-4 bg-gray-400" onClick={addTodo}>
          +
        </button>
      </div>
      {todos.map((item) => (
        <TodoItem
          key={item._id}
          item={item.item}
          checked={item.checked}
          _id={item._id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
