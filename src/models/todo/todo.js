import mongoose from 'mongoose';
import { TODO_STATUSES} from '../../common/constants/todo.js';

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: Object.values(TODO_STATUSES),
    default: TODO_STATUSES.ACTIVE,
  }
});

export default mongoose.model('Todo', todoSchema);
