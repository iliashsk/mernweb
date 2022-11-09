
import React,{useState,useEffect} from 'react';


function App(){
  var [feedback,setFeedback]=useState([])
  
 

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data)=>{

        for(var i=0;i<data.length;i++){
          delete data[i]._id;
          delete data[i].__v;
        }
       setFeedback([...data])

         
      });
      
  }, []);

  return(
    <div style={{float:'Right',marginRight:"50px"}}>
    <h1  style={{color:"#934353"}} align="right">All Users details</h1>
    <p align="right">Total: {feedback.length}</p>
    <div  className="profileuser"  style={{backgroundColor:"goldenrod"}}>
{feedback.map(obj=>

<div key={obj} style={{marginLeft:"20px"}}><h3>{obj.name}</h3><br/>{Object.values(obj).map(key => <div key={key}>{key}</div>)}<br/></div>

)}
    
  </div>
    

    </div>
    )

}


export default App;