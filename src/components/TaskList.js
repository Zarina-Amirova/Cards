import React from 'react';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>{task.name}</li>
    ))}
  </ul>
);

export default TaskList;
