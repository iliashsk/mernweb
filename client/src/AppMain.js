import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import About from './components/About'
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
import { useAuthStatus } from './hooks/useAuthStatus'
import { ToastContainer } from 'react-toastify'
import ForgotPassword  from  './pages/ForgotPassword'
import Signin  from  './pages/Signin'
import SignUp  from  './pages/Signup'
import Footer from './components/nav/Footer'


function AppMain(){

const { loggedIn} = useAuthStatus();
if(loggedIn){
  return (<>
     <FeedbackProvider>
    <div className="main"><BrowserRouter>
      <Routes>
      <Route path='/' element={<><Header/><About/><Layout/><Footer/></>} />
      <Route path='/rating' element={<><Header/><Appli/><Layout/></>}/>
      <Route path='/regist' element={<><Header/><Create/><Layout/><Footer/></>}/>
      <Route path='/registdetails' element={<><Header/><App/><Layout/><Footer/></>}/>
      <Route path='/weather' element={<><Header/><Weather/><Layout/><Footer/></>}/> 
      <Route path='/profile' element={<><Header/><App/><Layout/></>}/>
      <Route path='/calculator' element={<><Header/><Calculator/><Layout/><Footer/></>}/>
      </Routes>
      </BrowserRouter>
    
      </div>
      </FeedbackProvider>
   
  </>);
}
else{
  return (<>
    <BrowserRouter>
    <Routes>
    <Route path='/forgot-password' element={<><ForgotPassword/></>} />
          <Route path='/' element={<><Signin/></>} />
          <Route path='/signup' element={<><SignUp/></>} />
          <Route path='/signin' element={<><Signin/></>} />
      </Routes>
      
    </BrowserRouter>
   
   
  </>);
}

}

  

export default AppMain;
