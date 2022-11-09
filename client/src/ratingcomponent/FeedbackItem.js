import React,{useState,useEffect} from 'react';
import {FaTimes,FaTimesCircle,FaEdit} from 'react-icons/fa'
import Card from './shared/card'
import FeedbackData from '../data/FeedbackData'
function FeedbackItem({item,handleDelete}){
	

	return(
		<div>
		
		<Card  reverse={true}>
		<div className="num-display">{item.rating}</div>
		<button  onClick={()=>handleDelete(item.id)} className="close" >
		<FaTimesCircle color='red'/>
		</button>
		<button className="edit">
		<FaEdit color="purple"/>
		</button>
		<div className="text-display" id="jen">{item.text}</div>
	
			</Card>
			
			</div>
		)

}
 

export default FeedbackItem;