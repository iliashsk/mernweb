import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import UserHeader from './components/nav/UserHeader'
import Footer from './components/nav/Footer'
import Side from './components/nav/Side'
import Sidebar from './components/nav/Sidebar'
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
import Profile  from  './pages/Profile'
import Shop from './shop/Shop'


function AppMain(){

const { loggedIn} = useAuthStatus();
if(loggedIn){
  return (<>
     <FeedbackProvider>
    <div className="main"><BrowserRouter>
      <Routes>
      <Route path='/' element={<><div><Header/></div><div><Sidebar content={<><About/><AboutPage/></>}/></div></>} />
      <Route path='/rating' element={<><Header/><Sidebar content={<Appli/>}/></>}/>
      <Route path='/regist' element={<><Header/><Sidebar content={<Create/>}/></>}/>
      <Route path='/registdetails' element={<><Header/><Sidebar content={<App/>}/></>}/>
      <Route path='/weather' element={<><Header/><Sidebar content={<Weather/>}/></>}/> 
      <Route path='/profile' element={<><Header/><Sidebar content={<Profile/>}/></>}/>
      <Route path='/calculator' element={<><Header/><Sidebar content={<Calculator/>}/></>}/>
      <Route path='/setting' element={<><Header/><Sidebar/></>} />
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
   {/* <Route path='/forgot-password' element={<><ForgotPassword/></>} />*/}
          <Route path='/' element={<><UserHeader/><Sidebar content={<Shop/>}/></>} />
       { /*  <Route path='/signup' element={<><SignUp/></>} /> */}
          <Route path='/signin' element={<><UserHeader/><Signin/></>} />

  <Route path='/rating' element={<><UserHeader/><Sidebar content={<Appli/>}/></>}/>
 <Route path='/regist' element={<><UserHeader/><Sidebar content={<Create/>}/></>}/>
 <Route path='/weather' element={<><UserHeader/><Sidebar content={<Weather/>}/></>}/> 
 <Route path='/calculator' element={<><UserHeader/><Sidebar content={<Calculator/>}/></>}/>
 <Route path='/setting' element={<><UserHeader/><Sidebar/></>} />

      </Routes>
      
    </BrowserRouter>
   
   
  </>);
}

}

  

export default AppMain;
