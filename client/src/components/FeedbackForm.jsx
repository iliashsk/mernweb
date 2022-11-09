import React,{useState} from 'react';
import Card from './shared/card'
import Button from "./Button"
import RatingSelect from './RatingSelect'

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
handleAdd(rate);
setState({value:''});

   

  }


    return (<Card>
      
      <form onSubmit={handleSubmit}>
      <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <label>
          Name:
          <input type="text" value={state.value} onChange={handleChange} />
          
          <Button type='submit' isDisabled={disabled} ></Button>

          </label>
        
      </form>
</Card>
    );
  }
export default FeedbackForm;
