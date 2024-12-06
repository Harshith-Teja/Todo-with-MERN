import mongoose, { Schema } from "mongoose";

export type TodoItemType = {
  _id: string;
  item: string;
  checked: boolean;
};

const todoItemSchema = new Schema(
  {
    item: { type: String },
    checked: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model<TodoItemType>("Todos", todoItemSchema);
