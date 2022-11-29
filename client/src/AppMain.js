import React from 'react';
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
import Header from './components/nav/Header'


function AppMain(){



function Cont(){
const {feedback}=useContext(FeedbackContext);

  
return(

  <div style={{backgroundColor:"lightCyan",height:"100px"}}>
<p align="center">{feedback[0].text}</p>
<p align="center">mobile: {feedback[0].mobile}</p>

  </div>

  )
};


  return(

    <FeedbackProvider>
    <div className="main"><BrowserRouter>
      <Routes>
      <Route path='/' element={<><Header/><Clock/><Layout/><Cont/></>} />
      <Route path='/rating' element={<><Header/><Appli/><Layout/></>}/>
      <Route path='/regist' element={<><Header/><Create/><Layout/></>}/>
        <Route path='/registdetails' element={<><Header/><App/><Layout/></>}/>
      <Route path='/weather' element={<><Header/><Weather/><Layout/></>}/>
        <Route path='/login' element={<><Header/><Login/></>} />
      <Route path='/profile' element={<><Header/><Appli/></>}/>
      <Route path='/calculator' element={<><Header/><Calculator/><Layout/></>}/>
      </Routes>
      </BrowserRouter>
    
      </div>
      </FeedbackProvider>
      
)
}
export default AppMain;