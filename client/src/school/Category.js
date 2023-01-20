
import React,{useState,useEffect} from 'react';
import {useNavigate,createSearchParams} from 'react-router-dom'



function Category(){
  var [feedback,setFeedback]=useState([])
  
  const navigate=useNavigate()

 const handleSubmit=(event)=>{
  event.preventDefault();
  
navigate({
  pathname:'/marks',
search:createSearchParams({
  id:event.target.cat.value
}).toString()
 });
}
  useEffect(() => {
    fetch('/apis/users/marks')
      .then((res) => res.json())
      .then((data)=>{
       setFeedback([...data])

        
      });
      
  }, []);
return(
<>
<h3>{feedback.map((obj)=>

  {return(<><form onSubmit={handleSubmit} >
    <input type="hidden" name="cat" value={obj.cat} />
    <button type="submit"><h1>{obj.cat}</h1></button>
    </form><br/></>)}

  
)}</h3>
<p id="circle"></p>
</>
  )

}
export default Category;
