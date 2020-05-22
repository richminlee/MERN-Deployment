import React from 'react';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/" />
      <Create path="/new" />
      </Router>
    </div>
  );
}

export default App;
