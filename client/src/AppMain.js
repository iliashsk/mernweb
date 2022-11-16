import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clock from './components/Clock'
import Create from './components/Create';
import Pricing from './components/Pricing';
import Dbdata from './components/Dbdata';
import Appli from './ratingcomponent/Appli';
import Weather from './components/Weather';
import App from './components/App';
import Button from './components/Button';
import Layout from './Layout'
import AboutPage from './ratingcomponent/AboutPage'
import FeedbackContext,{FeedbackProvider} from './context/FeedbackContext';
import {useContext} from 'react';
import Calculator from './components/Calculator'
import Login from './login/Login'



function AppMain(){

return(<FeedbackProvider>
    <div className="main"><BrowserRouter>
      <Routes>
      <Route path='/' element={<><Clock/><Layout/><Calculator/><Login/></>} />
      <Route path='/rating' element={<><Appli/><Layout/></>}/>
      <Route path='/regist' element={<><Create/><Layout/></>}/>
        <Route path='/registdetails' element={<><App/><Layout/></>}/>
      <Route path='/weather' element={<><Weather/><Layout/></>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
      </FeedbackProvider>)
}
export default AppMain;