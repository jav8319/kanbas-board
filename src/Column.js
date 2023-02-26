import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

function Column(props) {
    return (
      <div >
        <div className='card mx-2 custom2 custom4'>
        <div className='card-header custom3'>{props.column.title}</div>
        <Droppable droppableId={props.column.id}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        </div>

      </div>
    );
}

export default Column;




  