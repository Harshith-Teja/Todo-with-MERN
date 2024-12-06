import mongoose, { Schema } from "mongoose";

export type TodoItemType = {
  id: string;
  item: string;
  checked: boolean;
};

const todoItemSchema = new Schema(
  {
    id: { type: String },
    item: { type: String },
    checked: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model<TodoItemType>("Todos", todoItemSchema);
