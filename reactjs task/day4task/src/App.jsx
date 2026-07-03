import React, { useState } from 'react';
import SpreadTask from './spread';
import DestructureTask from './destructure';
import EventhandlingTask from './Eventhandling';
import JSXTask from './understandingjsx';
import './App.css';

function App() {
  const [activeTask, setActiveTask] = useState('spread');

  const renderTask = () => {
    switch (activeTask) {
      case 'spread':
        return <SpreadTask />;
      case 'destructure':
        return <DestructureTask />;
      case 'eventhandling':
        return <EventhandlingTask />;
      case 'jsx':
        return <JSXTask />;
      default:
        return <SpreadTask />;
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>Day 4 React Tasks</h1>
        <div className="nav-buttons">
          <button 
            onClick={() => setActiveTask('spread')}
            className={activeTask === 'spread' ? 'active' : ''}
          >
            Spread Operator
          </button>
          <button 
            onClick={() => setActiveTask('destructure')}
            className={activeTask === 'destructure' ? 'active' : ''}
          >
            Destructuring
          </button>
          <button 
            onClick={() => setActiveTask('eventhandling')}
            className={activeTask === 'eventhandling' ? 'active' : ''}
          >
            Event Handling
          </button>
          <button 
            onClick={() => setActiveTask('jsx')}
            className={activeTask === 'jsx' ? 'active' : ''}
          >
            JSX Examples
          </button>
        </div>
      </nav>
      <main className="content">
        {renderTask()}
      </main>
    </div>
  );
}

export default App;
