import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {provided => (
        <div
          className='px-2 custom4 d-flex justify-content-between align-items-center'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span>{props.task.content}</span>
          <button
            onClick={(e) => { e.stopPropagation(); props.onDeleteTask(props.task.id); }}
            style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'red', lineHeight: 1 }}
          >×</button>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
