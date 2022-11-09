import React from 'react';
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

const root = ReactDOM.createRoot(document.getElementById('root'));

function Cont(){
const {feedback}=useContext(FeedbackContext);

  
return(

  <div>
<h1>{feedback[0].text}</h1>
  </div>

  )
};


  root.render(
    <FeedbackProvider>
    <div className="main"><BrowserRouter>
      <Routes>
      <Route path='/' element={<><Clock/><Layout/><Cont/></>} />
      <Route path='/rating' element={<><Appli/><Layout/></>}/>
      <Route path='/regist' element={<><Create/><Layout/></>}/>
        <Route path='/registdetails' element={<><App/><Layout/></>}/>
      
      </Routes>
      </BrowserRouter>
      
      </div>
      </FeedbackProvider>
      
)
