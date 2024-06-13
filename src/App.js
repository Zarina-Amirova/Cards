import React, { useEffect, useState } from 'react';
import { createAssistant } from '@sberdevices/assistant-client';

const assistant = createAssistant({ getState: () => ({}) });

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    assistant.on('data', (event) => {
      console.log(event);
      // Обработка событий ассистента
      if (event.type === 'smart_app_data' && event.payload) {
        handleAssistantData(event.payload);
      }
    });
  }, []);

  const handleAssistantData = (payload) => {
    // Обработка данных, полученных от ассистента
    if (payload.type === 'add_task') {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name: payload.task }]);
    }
  };

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>{task.name}</li>
    ))}
  </ul>
);

export default App;
