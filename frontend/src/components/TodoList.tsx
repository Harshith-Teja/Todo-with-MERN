import TodoItem from "./TodoItem";
import { TodoItemType } from "../types/TodoItemType";
import axios from "axios";

const TodoList = async () => {
  const list: TodoItemType[] = await axios.get("/api/todos");

  const addTask = () => {};

  return (
    <div className="bg-red-400 w-[30%] p-8">
      <h1 className="font-bold text-3xl text-center">Todo List</h1>
      <div className="flex my-4 gap-4">
        <input
          type="text"
          placeholder="type your task"
          className="p-4 rounded-lg w-full"
        />
        <button className="rounded-lg p-4 bg-gray-400" onClick={addTask}>
          +
        </button>
      </div>
      {list.map((item) => (
        <TodoItem key={item.id} item={item.item} checked={item.checked} />
      ))}
    </div>
  );
};

export default TodoList;
