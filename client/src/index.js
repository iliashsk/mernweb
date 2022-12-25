import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import AppMain from './AppMain'
import axios from 'axios';
import Button from './components/Button';
import Login from './login/Login'



const root = ReactDOM.createRoot(document.getElementById('root'));

/////////////////////////////////////

//////////////////////////////

console.log("this is well");
if(10===20/2){
  root.render(

    
       <>
      
    <AppMain/>
       
    </>
    )}
    else{
      root.render(<h1>you are not allowed to see cotents</h1>)
    }
   
      

