import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import initialData from './initialData';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function App() {
  const [data, setData] = useState(initialData);

  const columnTasks = {};
  for (const columnId of data.columnOrder) {
    columnTasks[columnId] = data.columns[columnId].taskIds.map(taskId => data.tasks[taskId]);
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const column = data.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      const [removed] = newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, removed);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
    } else {
      const sourceColumn = data.columns[source.droppableId];
      const destColumn = data.columns[destination.droppableId];
      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      const destTaskIds = Array.from(destColumn.taskIds);
      const [removed] = sourceTaskIds.splice(source.index, 1);
      destTaskIds.splice(destination.index, 0, removed);

      const newSourceColumn = {
        ...sourceColumn,
        taskIds: sourceTaskIds,
      };
      const newDestColumn = {
        ...destColumn,
        taskIds: destTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestColumn.id]: newDestColumn,
        },
      });
    }
  }

  return (
    <div className='container-fluid custom1'>
          
      <div className='d-flex p-3 justify-content-center'>
          <h1>My Kanban board</h1>
      </div>
 
      <div className='d-flex flex-wrap justify-content-center p-2'>
          <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => (
        <Column key={data.columns[columnId].id} column={data.columns[columnId]} tasks={columnTasks[columnId]} />
      ))}
    </DragDropContext>
    </div>

  
    </div>



  );
}

export default App;



  