import React, { useState } from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

function Column(props) {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      props.onAddTask(props.column.id, inputValue.trim());
      setInputValue('');
      setShowInput(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
    if (e.key === 'Escape') { setShowInput(false); setInputValue(''); }
  };

  return (
    <div className='m-2 custom2 custom4'>
      <div className='d-flex justify-content-between align-items-center custom3 px-2'>
        <span>{props.column.title}</span>
        <button
          onClick={() => setShowInput(!showInput)}
          style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: 'white', lineHeight: 1 }}
        >+</button>
      </div>
      <Droppable droppableId={props.column.id}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                onDeleteTask={(taskId) => props.onDeleteTask(taskId, props.column.id)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {showInput && (
        <div className='p-2 d-flex gap-1'>
          <input
            autoFocus
            className='form-control'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Task name...'
          />
          <button className='btn btn-success btn-sm' onClick={handleAdd}>Add</button>
        </div>
      )}
    </div>
  );
}

export default Column;
