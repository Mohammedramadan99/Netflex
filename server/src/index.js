import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);
app.use("/", (req,res) => {
  res.send("good")
});

const port = process.env.PORT || 5000;

const server = http.createServer(app);

mongoose.connect("mongodb+srv://Ecommerce:m1964118@cluster0.7n14b.mongodb.net/mozMovies").then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});

//test