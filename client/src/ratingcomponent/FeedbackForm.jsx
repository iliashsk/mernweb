import React,{useState} from 'react';
import Card from './shared/card'
import Button from "./Button"
import RatingSelect from './RatingSelect'
import axios from 'axios';

function FeedbackForm({reverse,FeedPass,handleAdd}){
const [rating,setRating]=useState(10);
const [state,setState]=useState({value:""});
const [disabled,setDisabled]=useState(true);

  function handleChange(event) {
    setState({value: event.target.value});
    if(event.target.value.length>10){
    setDisabled(false)
  }else{setDisabled(true)}
  }

  function handleSubmit(event) {
     event.preventDefault();
    
  
    const rate={
  text:state.value,
  rating:rating,
}
axios
.post("/rating", rate)
.then(() => 
        console.log(rate))
      .catch(err => {
        console.error(err);
      });


handleAdd(rate);
setState({value:''});

   
  }


    return (<Card reverse={true}>
      
      <form onSubmit={handleSubmit}>
      <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <label>
          Type here:
          <input type="text" value={state.value} onChange={handleChange} placeholder="Type more than 10 character"/>
          
          <Button type='submit' isDisabled={disabled} ></Button>

          </label>
        
      </form>
</Card>
    );
  }
export default FeedbackForm;
