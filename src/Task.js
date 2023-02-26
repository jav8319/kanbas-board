import React from 'react';

function Task(props) {
  const task = props.tasks[props.taskId];
  return (
    <div>
      <h2>{task.content}</h2>
    </div>
  );
}

export default Task;


  