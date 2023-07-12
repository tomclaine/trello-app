import React from 'react';
import './App.scss';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import BoardContent from 'components/BoardContent/BoardContent';

function App() {
  return (
    <div className="trello-app">
      <Header />
      <Navbar />
      <BoardContent />
    </div>
  );
}

export default App;
