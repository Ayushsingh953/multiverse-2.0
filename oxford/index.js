import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express"; 
import {connectDB} from "@macbease-multiverse/native";

const app = express();
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 6000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected to database!")
    console.log("Welcome to oxford!")
    app.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();