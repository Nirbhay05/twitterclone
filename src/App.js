import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Twiites from './components/Twiites';
import Trends from './components/Trends';

function App() {
  return (
    <div className="twitter">
      <Sidebar/>
      <Twiites/>
      <Trends/>
    </div>
  );
}

export default App;
