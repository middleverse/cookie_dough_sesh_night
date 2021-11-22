import express from "express";
import session from "express-session";
import mongoose from "mongoose";
const { MongoClient } = require("mongodb");
import { createSchema, Type, typedModel } from "ts-mongoose";

const app = express();

const uri =
  "mongodb+srv://admin:7xw8NYdzDL2Y9HZrAcfJMyH6PSZLNnxY@friedpancake.wd9jp.mongodb.net/TEMPDB?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
// client.connect((err: any) => {
//   const collection = client.db("TEMPDB").collection("Sessions");
//   // perform actions on the collection object
//   console.log("sessions: ", collection);
//   client.close();
// });

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log("MongoDB Connected!");
  });

// const connection = mongoose.createConnection(uri);

// console.log("model names", connection);
// session middleware
app.use(
  session({
    secret: "lets sign this cookie",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  //@ts-ignore
  res.send("Hello Sessions Tut");
});

app.listen(5000, () => console.log("Server Running on http://localhost:5000"));
