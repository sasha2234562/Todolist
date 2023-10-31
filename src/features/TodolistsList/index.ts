import { sliceTodolists } from "features/TodolistsList/todolists-reducer";
import { addTaskTC, fetchTasksTC, removeTaskTC, updateTaskTC } from "features/TodolistsList/Todolist/tasks-actions";
import {
  addTodolistTC,
  changeTodolistTitleTC,
  fetchTodolistsTC,
  removeTodolistTC
} from "features/TodolistsList/Todolist/todolist-actions";

const asyncActionsTask = {
  fetchTasksTC,
  removeTaskTC,
  addTaskTC,
  updateTaskTC
}
const asyncActionsTodo = {
  fetchTodolistsTC,
  removeTodolistTC,
  addTodolistTC,
  changeTodolistTitleTC
}
const todolistActions = {
  ...asyncActionsTodo,
  ...sliceTodolists.actions
};

const tasksActions = {
 ...asyncActionsTask
};

export {
  tasksActions,
  todolistActions
};