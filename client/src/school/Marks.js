
import React,{useState,useEffect} from 'react';


function Marks(){
  var [feedback,setFeedback]=useState([])
  
 

  useEffect(() => {
    fetch('/apis/users/marks')
      .then((res) => res.json())
      .then((data)=>{

        for(var i=0;i<data.length;i++){
          delete data[i]._id;
          delete data[i].__v;
          delete data[i].email;
          delete data[i].village;
          delete data[i].state;
          delete data[i].createdAt;
          delete data[i].updatedAt;
        }
       setFeedback([...data])

         
      });
      
  }, []);

  return(
    <>
    <h1  style={{color:"#934353"}} align="center">Sudents passed in Exam</h1>
    <p align="center">Total: {feedback.length}</p>
    <div style={{backgroundColor:"goldenrod"}} className="col-6-sm-3">
    <table className="table table-bordered table-hover">
    <tr><th scope="row">Name:</th><th scope="row">Mathematics</th>
    <th scope="row">Physics</th><th scope="row">Chemistry</th>
    <th scope="row">Bengali</th><th scope="row">Hindi</th>
    <th scope="row">English</th></tr>
{feedback.map(obj=>{
  
  return(
<tr>
<td>{obj.name}</td>
<td>{obj.math}</td>
<td>{obj.phys}</td>
<td>{obj.chem}</td>
<td>{obj.ben}</td>
<td>{obj.hin}</td>
<td>{obj.eng}</td>
</tr>)

})}
</table>
{/*<br/>{Object.values(obj).map(key => <div key={key}>{key}</div>)}<br/>*/}

    
  </div>
    
    
  </>  )

}
export default Marks;