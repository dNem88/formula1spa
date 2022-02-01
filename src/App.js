import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.module.css';
import Navigation from './components/common/navigation/Navigation'
function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path={'/'} element={<p>Home Page</p>}/>
        <Route path={'/about'} element={<p>About Page</p>}/>
      </Routes>
    </Router>
  );
}

export default App;
