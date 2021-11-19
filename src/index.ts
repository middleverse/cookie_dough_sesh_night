import express from "express";
import session from "express-session";

const app = express();

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
