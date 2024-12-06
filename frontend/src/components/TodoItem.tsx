import { deleteTask } from "../api/todoApi";

type TodoItemProps = {
  _id: string;
  item: string;
  checked: boolean;
};

const TodoItem = ({ _id, item, checked }: TodoItemProps) => {
  const deleteTodo = async () => {
    await deleteTask(_id);
  };

  return (
    <div className="bg-purple-400 my-8 rounded-lg p-4 flex gap-4">
      <input type="checkbox" checked={checked} className="w-6" />
      <h1 className="text-xl">{item}</h1>
      <button className="ml-auto" onClick={deleteTodo}>
        Dlt
      </button>
    </div>
  );
};

export default TodoItem;
