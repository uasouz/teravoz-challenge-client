import React from 'react';
import './App.css';
import MainContent from "../MainContent";
import Header from "../Header";
import Footer from "../Footer";

const App: React.FC = () => {
  return (
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
  );
}

export default App;
