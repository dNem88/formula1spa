import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.module.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<p>Home Page</p>}/>
        <Route path={'/about'} element={<p>About Page</p>}/>
      </Routes>
    </Router>
  );
}

export default App;
