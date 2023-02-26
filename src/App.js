import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
    
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1', 'colum-2'],
};

function App() {
  const [data, setData] = useState(initialData);

  const columnTasks = {};
  for (const columnId of data.columnOrder) {
    columnTasks[columnId] = data.columns[columnId].taskIds.map(taskId => data.tasks[taskId]);
  }
  
  const onDragEnd = (result) => {
      
  }

  
  return (
    <div>
       <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => (
        <div key={columnId}>
          <Column column={data.columns[columnId]} tasks={columnTasks[columnId]} />
        </div>
      ))}
       </DragDropContext>
  
    </div>
  );
}

export default App;


  