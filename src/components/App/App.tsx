import React from 'react';
import './App.css';
import MainContent from "../MainContent";
import Header from "../Header";

const App: React.FC = () => {
  return (
      <div className="App">
        <Header/>
        <MainContent/>
      </div>
  );
};

export default App;
