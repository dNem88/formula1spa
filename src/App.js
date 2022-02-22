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
import NewsLayout from './components/news/layout/NewsLayout';
import MobileNavigation from './components/common/mobileNavigation/MobileNavigation';
import Footer from './components/common/footer/Footer'
import ActiveNews from './components/news/activeNews/ActiveNews';
import VideoLayout from './components/video/videoLayout/VideoLayout'
import MainVideo from './components/video/mainVideo/MainVideo'
import StandingsLayout from './components/standings/standingsLayout/StandingsLayout';
import ScheduleLayout from './components/schedule/ScheduleLayout/ScheduleLayout';
import DriversStandings from './components/home/standings/DriversStandings';
import ConstructorsStandings
 from './components/common/constructorsStandings/ConstructorsStandings';
function App() {
  const [viewport, setViewport] = useState({width: window.innerWidth})
  let contextNews = useNews();
  let context = useAuth()
  
  function onResize(e) {
    setViewport({width: window.innerWidth})
  }
  useEffect(() => {
    if (context.isLogged === 'initial') {
       context.verify()
    }
  }, [])
  useEffect(() => {
     window.addEventListener('resize', onResize)
     return () => {
        window.removeEventListener('resize', onResize)
     }
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
          <Route path={'/news/*'} element={
            <newsContext.Provider value={contextNews}>
              <NewsLayout/>
            </newsContext.Provider>}>
              <Route path={':id'} element={<ActiveNews index={false}/>}/>
              <Route index element={
                <ActiveNews index={true}/>}/>
          </Route>
          <Route path={'/videos/*'} element={<VideoLayout/>}>
                <Route path=":id" element={<MainVideo/>}/>
                <Route index element={<MainVideo/>}/>
          </Route>
          <Route path={'/schedule'} element={<ScheduleLayout/>}/>
          <Route path={'/standings/*'} element={<StandingsLayout/>}>
                <Route path={'drivers'} element={<DriversStandings count={25}/>}/>
                <Route path={'constructors'} element={<ConstructorsStandings/>}/>
                 <Route index element={<DriversStandings count={25}/>}/>
          </Route>
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
      <Footer/>
    </Router>
  );
}

export default App;
