import { useState } from "react";
import { deleteTask, updateTask } from "../api/todoApi";
import { TodoItemType } from "../types/TodoItemType";

type TodoItemProps = {
  _id: string;
  item: string;
  checked: boolean;
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

const TodoItem = ({ _id, item, checked, todos, setTodos }: TodoItemProps) => {
  const [checkedState, setCheckedState] = useState<boolean>(checked);

  const deleteTodo = async () => {
    await deleteTask(_id);
    setTodos(todos.filter((todo) => todo._id !== _id));
  };

  const updateTodo = async () => {
    const updatedItem = await updateTask({ _id, item, checked: !checked });
    setTodos((prev) =>
      prev.map((todo) => (todo._id === _id ? { ...todo, updatedItem } : todo))
    );
  };

  return (
    <div className="bg-slate-100 bg-opacity-30 my-8 rounded-lg p-4 flex gap-4">
      <input
        type="checkbox"
        checked={checkedState}
        className="w-6"
        onChange={() => {
          updateTodo();
          setCheckedState((prev) => !prev);
        }}
      />
      <h1 className="text-xl">{item}</h1>
      <button className="ml-auto" onClick={deleteTodo}>
        Dlt
      </button>
    </div>
  );
};

export default TodoItem;
