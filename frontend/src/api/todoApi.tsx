import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (todoItem: {
  item: string;
  checked: boolean;
}) => {
  const response = await axios.post(API_URL, todoItem);
  return response.data;
};

export const updateTask = async (todoItem: {
  _id: string;
  item: string;
  checked: boolean;
}) => {
  const response = await axios.put(`${API_URL}/${todoItem._id}`, todoItem);
  return response.data;
};

export const deleteTask = async (_id: string) => {
  const response = await axios.delete(`${API_URL}/${_id}`);
  return response.data;
};
