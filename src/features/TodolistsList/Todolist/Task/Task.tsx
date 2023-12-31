import React, { ChangeEvent, useCallback } from "react";
import { Checkbox, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { TaskType } from "features/TodolistsList/todolists.api";
import { EditableSpan } from "common/components";
import { TaskStatuses } from "common/enums";
import { useActions } from "common/hooks";
import { tasksThunks } from "features/TodolistsList";

type TaskPropsType = {
  task: TaskType;
  todolistId: string;
};

export const Task = React.memo((props: TaskPropsType) => {

  const { removeTask, updateTask } = useActions(tasksThunks);

  const onClickHandler = useCallback(
    () => removeTask({ taskId: props.task.id, todolistId: props.todolistId }),
    [props.task.id, props.todolistId]
  );

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      let newIsDoneValue = e.currentTarget.checked;
      updateTask({
        taskId:
        props.task.id,
        domainModel: { status: newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New },
        todolistId: props.todolistId
      });
    },
    [props.task.id, props.todolistId]
  );

  const onTitleChangeHandler = useCallback((newValue: string) => {
      updateTask({ taskId: props.task.id, domainModel: { title: newValue }, todolistId: props.todolistId });
    },
    [props.task.id, props.todolistId]
  );

  return (
    <div key={props.task.id} className={props.task.status === TaskStatuses.Completed ? "is-done" : ""}>
      <Checkbox checked={props.task.status === TaskStatuses.Completed} color="primary" onChange={onChangeHandler} />
      <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
      <IconButton onClick={onClickHandler}>
        <Delete />
      </IconButton>
    </div>
  );
});
