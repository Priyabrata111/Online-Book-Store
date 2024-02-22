import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import morgan from "morgan";
import router from "./routes/authRoute.js";

//configure env
dotenv.config();

//connect database
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", router);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to my website</h1>");
});

//PORT
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`.bgCyan.white);
});
