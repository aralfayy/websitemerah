import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import WellRoute from "./routes/WellRoute.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/perta", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(WellRoute);

app.listen(5000, () => console.log("Server up and running"));
