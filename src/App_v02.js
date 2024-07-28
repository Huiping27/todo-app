import React from 'react';
import './App.css';
import TodoList from './TodoList';
import { addTask, Task } from './todoFunctions'; // Import functions

function App() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
  
  export default App;
  