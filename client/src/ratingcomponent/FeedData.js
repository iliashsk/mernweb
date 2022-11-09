import React, {useState,useEffect} from 'react';
//import logo from './logo.svg';
//import '../App.css';




function FeedData() {
   const [feeddata,setFeeddata]=useState([]);
   
  
 
  useEffect(() => {
    fetch('/Home')
      .then((res) => res.json())
      .then((data) =>{ setFeeddata([...data])
         
      });
      
  }, []);

       return (
      
      <div align="center" className="app">
        <h1>this is FeedData</h1>
      {
        feeddata.map((data)=><p>{data.text}</p>)
      }
        </div>
      
    );
  
}


export default FeedData;
