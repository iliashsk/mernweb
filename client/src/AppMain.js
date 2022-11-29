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
      <Route path='/' element={<><Clock/><Layout/><Cont/><Calculator/><Login/></>} />
      <Route path='/rating' element={<><Appli/><Layout/></>}/>
      <Route path='/regist' element={<><Create/><Layout/></>}/>
        <Route path='/registdetails' element={<><App/><Layout/></>}/>
      <Route path='/weather' element={<><Weather/><Layout/></>}/>
      </Routes>
      </BrowserRouter>
      
      </div>
      </FeedbackProvider>
      
)
}
export default AppMain;