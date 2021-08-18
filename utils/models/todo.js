const mangoose = require("mongoose");
const TodoSchema = new mangoose.Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const Todo = mangoose.model("todo", TodoSchema);
module.exports = Todo;
