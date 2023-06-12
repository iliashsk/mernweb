import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import UserHeader from './components/nav/UserHeader'
import Footer from './components/nav/Footer'
//import Side from './components/nav/Side'
import Sidebar from './components/nav/Sidebar'
import Carousel from './components/Carousel'
//import Create from './components/Create';
//import Pricing from './components/Pricing';
//import Dbdata from './components/Dbdata';
//import Appli from './ratingcomponent/Appli';
//import Weather from './components/Weather';
//import App from './components/App';
import Button from './components/Button';
import Contact from './components/Contact'
//import Layout from './Layout'
import AboutPage from './ratingcomponent/AboutPage'
import FeedbackContext,{FeedbackProvider} from './context/FeedbackContext';
import {useContext} from 'react';
//import Calculator from './components/Calculator'
import Header from './components/nav/Header'
import { useAuthStatus } from './hooks/useAuthStatus'
//import ForgotPassword  from  './pages/ForgotPassword'
import Signin  from  './pages/Signin'
import SignUp  from  './pages/Signup'
import Profile  from  './pages/Profile'
import Shop from './shop/Shop'
import NewItems from './shop/NewItems'
import OrderForm from './shop/OrderForm'
import SingleItem from './shop/SingleItem'
import AllUser from './shop/AllUser'

//import StuRegist from './school/StuRegist'
//import Marks from './school/Marks'
//import Category from './school/Category'
//import Map from './school/Map'
//import Voice from './school/Voice'



function AppMain(){

const { loggedIn} = useAuthStatus();
if(loggedIn){
  return (<>
     <FeedbackProvider>
    
    <div className="main"><BrowserRouter>
      <Routes>
      <Route path='/' element={<><div></div><div><Sidebar content={<><Carousel/><AboutPage/></>}/></div></>} />
     {/* <Route path='/rating' element={<><Header/><Sidebar content={<Appli/>}/></>}/>
      <Route path='/regist' element={<><Header/><Sidebar content={<Create/>}/></>}/>
      <Route path='/registdetails' element={<><Header/><Sidebar content={<App/>}/></>}/>
      <Route path='/weather' element={<><Header/><Sidebar content={<Weather/>}/></>}/> 
      <Route path='/profile' element={<><Header/><Sidebar content={<Profile/>}/></>}/>
      <Route path='/calculator' element={<><Header/><Sidebar content={<Calculator/>}/></>}/>
      <Route path='/electronics' element={<><Header/><Sidebar content={<><Shop/></>}/></>} />
      */
       }
      <Route path='/additems' element={<><Sidebar content={<><NewItems/></>}/></>} />
       <Route path='/alluser' element={<><Sidebar content={<><AllUser/></>}/></>} />
      
     
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
         
       { /*  <Route path='/signup' element={<><SignUp/></>} /> */}
         

 {/* <Route path='/rating' element={<><UserHeader/><Appli/></>}/>
 <Route path='/regist' element={<><UserHeader/><Create/></>}/>
 <Route path='/sturegist' element={<><UserHeader/><StuRegist/></>} />
 <Route path='/weather' element={<><UserHeader/><Weather/></>}/> 
 <Route path='/calculator' element={<><UserHeader/><Calculator/></>}/>
 <Route path='/setting' element={<><UserHeader/><Sidebar/></>} />
  <Route path='/marks' element={<><UserHeader/><Marks/>}/></>} />
   <Route path='/category' element={<><UserHeader/><Category/><Map/><Voice/></>} />
   */}
    <Route path='/' element={<><UserHeader/><Carousel/><Contact/></>} />
  <Route path='/signin' element={<><UserHeader/><Signin/></>} />
   <Route path='/contact' element={<><UserHeader/><Contact/></>} />
   <Route path='/saree' element={<><UserHeader/><NewItems/></>}/>
   <Route path="/single" element={<><UserHeader/><SingleItem/></>} />
    <Route path="/order" element={<><UserHeader/><OrderForm/></>} />

      </Routes>
      
    </BrowserRouter>
    <Footer/>
   
   
  </>);
}

}

  

export default AppMain;
