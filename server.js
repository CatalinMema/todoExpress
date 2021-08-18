const express = require("express");
const connectDb = require("./utils/mongo");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

connectDb();
const todoRouter = require("./src/API/todo");

app.use("/", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
