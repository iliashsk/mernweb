import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import AppMain from './AppMain'
import axios from 'axios';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'






const root = ReactDOM.createRoot(document.getElementById('root'));

/////////////////////////////////////

//////////////////////////////

console.log("this is well");
if(10===20/2){
  root.render(

    
       <>     
       <ToastContainer/>
    <AppMain/>
    </>
    )}
    else{
      root.render(<h1>you are not allowed to see cotents</h1>)
    }
   
      

