import React, {useEffect, useState, lazy, Suspense} from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import './App.module.css';

import Navigation from './components/common/navigation/Navigation'
import MobileNavigation from './components/common/mobileNavigation/MobileNavigation';
import Layout from './components/home/layout/Layout';
import Footer from './components/common/footer/Footer'
import MainSpinner from './components/common/mainSpinner/MainSpinner'

import userContext from './context/userContext'
import newsContext from './context/newsContext';
import useAuth from './hooks/useAuth'
import useNews from './hooks/useNews';


const ActiveNews = lazy(() => 
  import('./components/news/activeNews/ActiveNews')
)


const VideoLayout = lazy(() => 
  import('./components/video/videoLayout/VideoLayout')
)

const MainVideo = lazy(() => 
  import('./components/video/mainVideo/MainVideo')
)

const StandingsLayout = lazy(() => 
  import('./components/standings/standingsLayout/StandingsLayout')
)

const ScheduleLayout = lazy(() => 
  import('./components/schedule/ScheduleLayout/ScheduleLayout')
)

const DriversStandings = lazy(() => 
  import('./components/home/standings/DriversStandings')
)
const ConstructorsStandings = lazy(() => 
  import('./components/common/constructorsStandings/ConstructorsStandings')
)


const DriversLayout = lazy(() =>
import('./components/drivers/driversLayout/DriversLayout')
)
const DriverPageLayout = lazy(() => 
import('./components/driverPage/driverPageLayout/DriverPageLayout')
)


const TeamsLayout = lazy(() => 
import('./components/teams/teamsLayout/TeamsLayout'))
const TeamPageLayout = lazy(() => 
import('./components/teamPage/teamPageLayout/TeamPageLayout')
)

const AuthLayout = lazy(() => 
  import('./components/register/Layout/AuthLayout')
)
const Register = lazy(() => 
  import('./components/register/Register/Register')
)
const Login = lazy(() => 
  import('./components/register/Login/Login')
)




const NewsLayout = lazy(() =>
  import('./components/news/layout/NewsLayout')
)
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
        <Suspense fallback={<MainSpinner/>}>
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
            <Route path={'/drivers'} element={<DriversLayout/>}/>
            <Route path={'/drivers/:id'} element={<DriverPageLayout/>}/>
            <Route path={'/teams'} element={<TeamsLayout/>}/>
            <Route path={'/teams/:id'} element={<TeamPageLayout/>}/>
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
        </Suspense>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
