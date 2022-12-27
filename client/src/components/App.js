
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
          delete data[i]._ct;
          delete data[i]._ac;
        }
       setFeedback([...data])

         
      });
      
  }, []);

  return(
    <>
    <h1  style={{color:"#934353"}} align="center">All Users details</h1>
    <p align="center">Total: {feedback.length}</p>
    <div style={{backgroundColor:"goldenrod"}} className="col-6-sm-3">
    <table className="table table-bordered table-hover">
    <tr><th scope="row">Sl</th><th scope="row">name</th>
    <th scope="row">email</th><th scope="row">address</th>
    <th scope="row">grade</th><th scope="row">subject</th></tr>
{feedback.map(obj=>{
  
  return(
<tr>
<td>{}</td>
<td>{obj.name}</td>
<td>{obj.email}</td>
<td>{obj.address}</td>
<td>{obj.grade}</td>
<td>{obj.favsub}</td>
</tr>)

})}
</table>
{/*<br/>{Object.values(obj).map(key => <div key={key}>{key}</div>)}<br/>*/}

    
  </div>
    
    
  </>  )

}
export default App;