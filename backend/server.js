import express from "express";
import cors from "cors";
import { mongoConnect, getDB } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Medical Query Engine backend running..."));

app.get("/search", async (req, res) => {
  const q = req.query.q || "";
  const db = getDB();
  const items = await db.collection("medical_docs").find({ symptom: { $regex: q, $options: "i" } }).toArray();
  res.json(items);
});

const start = async () => {
  await mongoConnect();
  app.listen(4000, () => console.log("Server running on port 4000"));
}

start();
