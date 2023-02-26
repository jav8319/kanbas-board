import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

function Column(props) {
  return (
    <div>
      <h1>{props.column.title}</h1>
      <Droppable droppableId={props.column.id}>
        
      {props.tasks.map((task) => (
        
        <Task key={task.id} task={task} />
      ))}
      </Droppable>
    </div>
  );
}

export default Column;



  