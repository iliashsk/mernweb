import {createContext,useState} from 'react';

const FeedbackContext=createContext();
export const FeedbackProvider=({children})=>{

const [feedback,setFeedback]=useState([{
	id:1,
	text:"Developed by Iliash Sk and Co",
	mobile:6295737320,
}])



	return(<FeedbackContext.Provider value={{feedback}}>
		{children}
		</FeedbackContext.Provider>
		)
}
export default FeedbackContext;