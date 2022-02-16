import React, {useEffect, useState} from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import './App.module.css';
import Navigation from './components/common/navigation/Navigation'
import userContext from './context/userContext'
import newsContext from './context/newsContext';
import useAuth from './hooks/useAuth'
import useNews from './hooks/useNews';
import AuthLayout from './components/register/Layout/AuthLayout';
import Register from './components/register/Register/Register';
import Login from './components/register/Login/Login';
import Layout from './components/home/layout/Layout';
import MobileNavigation from './components/common/mobileNavigation/MobileNavigation';

function App() {
  const [viewport, setViewport] = useState({width: window.innerWidth})
  let contextNews = useNews();
  let context = useAuth()
 
  useEffect(() => {
    if (context.isLogged === 'initial') {
       context.verify()
    }
  }, [])
  useEffect(() => {
     window.addEventListener('resize', (e) => {
       setViewport({width: window.innerWidth})
       console.log('event Resize Triggered')
     })

  }, [])
  console.log('RENDER FROM APP>JS')
  return (
    <Router>
      <userContext.Provider value={context}>
        {viewport.width > 850 ? <Navigation/> : <MobileNavigation/>}
      </userContext.Provider>
      <main>
        <Routes>
          <Route path={'/'} element={
            <newsContext.Provider value={contextNews}>
              <Layout/>
            </newsContext.Provider>}/>
          <Route path={'/news'} element={<p>LatestPage</p>}/>
          <Route path={'/video'} element={<p>Video Page</p>}/>
          <Route path={'/schedule'} element={<p>Schedule Page</p>}/>
          <Route path={'/standings'} element={<p>Standings Page</p>}/>
          <Route path={'/drivers'} element={<p>Drivers Page</p>}/>
          <Route path={'/teams'} element={<p>Teams Page</p>}/>
          <Route path={'/auth'} element={<AuthLayout/>}>
            <Route path={'login'} element={
              <userContext.Provider value={context}>
                <Login/>
              </userContext.Provider>
              }/>
            <Route path={'register'} element={
              <userContext.Provider value={context}>
                <Register/>
              </userContext.Provider>
            }/>
            <Route index element={<userContext.Provider value={context}>
                <Login/>
              </userContext.Provider>}/>
          </Route>
          <Route path={'/profile'} element={<p>Profile Page</p>}/>
        </Routes>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
