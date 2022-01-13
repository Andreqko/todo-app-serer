import express from 'express';
import { body } from 'express-validator';

import actions from './todo.controller.js';
import {TODO_STATUSES} from "../../../common/constants/todo.js";
import {TODO_ERROR_MESSAGES} from "../../../common/error-messages/todo-error-messages.js";

const router = express.Router();

router.get('/', actions.getTodos);

router.post('/todo',
  body('text').not().isEmpty().trim().escape(),
  body('status').custom(status => {
    const todoStatuses = Object.values(TODO_STATUSES);

    if (!todoStatuses.includes(status)) {
      return Promise.reject(TODO_ERROR_MESSAGES.WRONG_STATUS);
    }

    return true;
}), actions.createTodo)

export default router;
