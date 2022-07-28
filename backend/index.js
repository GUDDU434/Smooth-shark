const express = require("express");
const { connection } = require("./src/database/db");
const userRouter = require("./src/userRouter/userRouter");
const cors = require("cors")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/user", userRouter);

app.listen(8080, async () => {
  await connection;
  console.log("server has started on port 8080");
});
