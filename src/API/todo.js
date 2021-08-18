const express = require("express");
const Todo = require("../../utils/models/todo");
const router = express.Router();

router.get("/todos", async (req, res) => {
  Todo.find().then((todo) => res.json(todo));
});

router.get("/todos/page/:SKIPS", async (req, res) => {
  const skipsElements = req.params.SKIPS;
  Todo.find()
    .skip(Number(skipsElements))
    .limit(8)
    .sort({ _id: -1 })
    .then((todo) => res.json(todo));
});

router.get("/todos/search/:TEXT", async (req, res) => {
  const text_todo = req.params.TEXT;
  Todo.find({ text: { $regex: text_todo, $options: "i" } }).then((todo) =>
    res.json(todo)
  );
});

router.get("/todos/search/:TEXT/:SKIPS", async (req, res) => {
  const skipsElements = req.params.SKIPS;
  const text_todo = req.params.TEXT;
  Todo.find({ text: { $regex: text_todo } })
    .sort({ _id: -1 })
    .skip(Number(skipsElements))
    .limit(8)
    .then((todo) => res.json(todo));
});

router.get("/todos/:DAY", async (req, res) => {
  Todo.find({ date: req.params.DAY })
    .sort({ _id: -1 })
    .then((todo) => {
      // console.log(todo);
      res.json(todo);
    });
});

router.get("/todos/:DAY/:SKIPS", async (req, res) => {
  const skipsElements = req.params.SKIPS;
  Todo.find({ date: req.params.DAY })
    .skip(Number(skipsElements))
    .limit(8)
    .sort({ _id: -1 })
    .then((todo) => {
      // console.log(todo);
      res.json(todo);
    });
});

router.post("/todos", async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
    date: req.body.date,
    done: req.body.done,
  });
  try {
    await newTodo.save();
    res.send("Todo added");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.delete("/todos/:ID", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.ID);
    res.send("Todo removed");
  } catch {
    res.status(404).send({ error: "Todo is not found!" });
  }
});

router.put("/todos/:ID/:TEXT", async (req, res) => {
  try {
    await Todo.updateOne({ _id: req.params.ID }, { text: req.params.TEXT });
    res.send("Todo updated");
  } catch {
    res.status(404).send({ error: "Todo is not found!" });
  }
});

router.put("/completed/:ID/:DONE", async (req, res) => {
  try {
    await Todo.updateOne(
      { _id: req.params.ID },
      { done: req.params.DONE }
    ).then((result) => res.send("To do complete"));
  } catch {
    res.status(404).send({ error: "Todo is not found!" });
  }
});

module.exports = router;
