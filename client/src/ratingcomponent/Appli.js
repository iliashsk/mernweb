import {v4 as uuidv4} from 'uuid';
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header,{LoginControl} from './Header'
import FeedbackData from '../data/FeedbackData'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'
import FeedbackForm from './FeedbackForm'
import AboutePage from './AboutPage'
import FeedbackContext,{FeedbackProvider} from '../context/FeedbackContext'

function Appli(){
	var [feedback,setFeedback]=useState([])
	const deleteFeedback=(id)=>{
		if(window.confirm("Are you sure you want to delete this?")){
			setFeedback(feedback.filter((item)=>item.id!==id))
		}
	}
	/*const addFeedback=(newFeedback)=>{
		newFeedback.id=uuidv4();
setFeedback([newFeedback, ...feedback]);
		console.log(newFeedback);
	}
	*/

	useEffect(() => {
    fetch('/Home')
      .then((res) => res.json())
      .then((data)=>{ setFeedback([...data])
         
      });
      
  }, []);

	return(
		<FeedbackProvider>
		<div align="center">
		<Header name="iliash sk" text="you are most welcome"/>
		<FeedbackForm />
		<FeedbackStats number={feedback}/>
		<FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
		
		
	</div>
		</FeedbackProvider>
		)

}


export default Appli;