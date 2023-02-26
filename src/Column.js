import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

function Column(props) {
    return (
     
        <div className='m-2 custom2 custom4'>
          <div className='d-flex justify-content-center custom3'>{props.column.title}</div>
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

      
    );
}

export default Column;




  