import { TodolistDomainType, todolistsReducer } from "features/TodolistsList/todo/todolists-reducer";
import { tasksReducer, TasksStateType } from "features/TodolistsList/task/tasks-reducer";
import { TodolistType } from "api/todolists-api";
import { todolistActions } from "features/TodolistsList/index";

test("ids should be equals", () => {
  const startTasksState: TasksStateType = {}
  const startTodolistsState: Array<TodolistDomainType> = []

  let todolist: TodolistType = {
    title: "new todolist",
    id: "any id",
    addedDate: "",
    order: 0,
  }

  const action = todolistActions.addTodolistTC.fulfilled({ todolist }, 'requestId', '')

  const endTasksState = tasksReducer(startTasksState, action)
  const endTodolistsState = todolistsReducer(startTodolistsState, action)

  const keys = Object.keys(endTasksState)
  const idFromTasks = keys[0]
  const idFromTodolists = endTodolistsState[0].id

  expect(idFromTasks).toBe(action.payload.todolist.id)
  expect(idFromTodolists).toBe(action.payload.todolist.id)
})
