import React,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
//import FeedbackContext from '../context/Context'
function AboutPage(){
	//const {feedback}=useContext(FeedbackContext);
	const {feedback}=useContext(FeedbackContext);
	console.log(feedback[0].id);
	//console.log(feedback[0].id);
	return(<div>
		
		{feedback[0].id}
		</div>)}	
export default AboutPage;