

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
    'task-5': { id: 'task-5', content: 'cook beans' },
    'task-6': { id: 'task-6', content: 'Watch tv' },
    'task-7': { id: 'task-7', content: 'cook breakfast' },
    'task-8': { id: 'task-8', content: 'read book' },
    'task-9': { id: 'task-9', content: 'have lunch' },
    'task-10': { id: 'task-10', content: 'go to bed' },
    'task-11': { id: 'task-11', content: 'workout' },
    'task-12': { id: 'task-12', content: 'watch news' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-12', 'task-5', 'task-6', 'task-7'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Pending',
      taskIds: ['task-8', 'task-9', 'task-10', 'task-11'],
    },

  },
  columnOrder: ['column-1', 'column-2', 'column-3' ],
};


export default initialData;


  