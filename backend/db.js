import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "medsetra_db";
let database;

export const mongoConnect = async () => {
  await client.connect();
  database = client.db(dbName);
  console.log("Connected to MongoDB:", dbName);
};

export const getDB = () => {
  if (!database) throw new Error("Database not connected");
  return database;
};
