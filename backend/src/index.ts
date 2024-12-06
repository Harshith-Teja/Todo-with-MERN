import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import todoItemRoutes from "./routes/todoItemRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api/tasks", todoItemRoutes);

//DB connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
