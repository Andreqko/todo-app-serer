import { validationResult } from 'express-validator';

import TodoModel from '../../../models/todo/todo.js';

const createTodo = async (req, res) => {
  // TODO: move to separate middleware
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { text, status } = req.body;
  const { order = 0 } = await TodoModel.findOne({}).sort({ order: -1 }).limit(1) ?? {};

  return new TodoModel({ text, status, order: order + 1 }).save();
};

const getTodos = async () => TodoModel.find({}).sort({ order: 1 });

export default {
  createTodo,
  getTodos,
}