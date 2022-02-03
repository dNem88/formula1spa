import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.module.css';
import Navigation from './components/common/navigation/Navigation'
import userContext from './context/userContext'
import useAuth from './hooks/useAuth'
import AuthLayout from './components/register/Layout/AuthLayout';
import Register from './components/register/Register/Register';

function App() {
  let context = useAuth()
  useEffect(() => {
    context.verify()
  }, [])
  return (
    <Router>
      <userContext.Provider value={context}>
        <Navigation/>
      </userContext.Provider>
      <main>
        <Routes>
          <Route path={'/'} element={<p>Home Page</p>}/>
          <Route path={'/latest'} element={<p>Latest News Page</p>}/>
          <Route path={'/video'} element={<p>Video Page</p>}/>
          <Route path={'/schedule'} element={<p>Schedule Page</p>}/>
          <Route path={'/standings'} element={<p>Standings Page</p>}/>
          <Route path={'/drivers'} element={<p>Drivers Page</p>}/>
          <Route path={'/teams'} element={<p>Teams Page</p>}/>
          <Route path={'/auth'} element={<AuthLayout/>}>
              <Route path={'login'} element={<p>LoginPage</p>}/>
              <Route path={'register'} element={<Register/>}/>
              <Route index element={<Register/>}/>
          </Route>
          <Route path={'/profile'} element={<p>Profile Page</p>}/>
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
