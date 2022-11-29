import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import AppMain from './AppMain'
import axios from 'axios';
import Button from './components/Button';



const root = ReactDOM.createRoot(document.getElementById('root'));

/////////////////////////////////////

//////////////////////////////

var x=10;
//console.log(this.state.sec);
    if(x===10){
  root.render(
    
       <>
      
    <AppMain/>
    </>
    )}
    else{
      root.render(<h1>you are not allowed to see cotents</h1>)
    }
   
      

