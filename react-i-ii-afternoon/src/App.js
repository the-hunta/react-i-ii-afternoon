import React from 'react';
import './App';
import Data from './Data'
import Header from './Header'
import Card from './Card'

function App() {
  return (
    <div className="App">
    <Header/>
    <Card data = {Data}/>
     
    </div>
  );
}

export default App;
