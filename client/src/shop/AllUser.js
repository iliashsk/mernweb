import { useEffect,useState } from 'react'
import Card from '../components/shared/card'


function AllUser() {


  const [list,setList]=useState([])


  // NOTE: only need one useEffect here

  useEffect(() => {
    fetch('/api/users/order')
    .then((res) => res.json())
    .then((result)=>{
      setList(result);
      //console.log(result.length)
     // console.log(Object.is(result,null));
      
    })
    
  }, []);




  // NOTE: no need for loading state, we can check for absence of tickets
  // If we don't have tickets we are loading, if we do have tickets we just
  // need to update the tickets with latest tickets in the background


  return (
    <>
    <br/>
    <br/>
    <br/>
    

<h1 align="center">All Orders List</h1>
    <div align='center'>
    <Card reverse={true} align='center'>
      
      <div className='tickets'>
        <table class="table table-striped table-sm">
          <th>Sl</th>
          <th>name</th>
          <th>address </th>
          <th>gender </th>
          <th>product name </th>
          <th>pincode </th>
          <th>price </th>
          <th>mobile </th>
          <th>email </th>
          <th>time created </th>
         {
      list.map((obj,index)=>{
    
    return(<>
    <tr>
    <td>{index+1}</td>
    <td>{obj["name"]}</td>
    <td>{obj["address"]}</td>
    <td>{obj["gender"]}</td>
    <td>{obj["product"]}</td>
    <td>{obj["pin"]}</td>
    <td>{obj["price"]}</td>
    <td>{obj["mobile"]}</td>
    <td>{obj["email"]}</td>
    <td>{obj["createdAt"]}</td>
    

    </tr>
    </>)
        })
       }
        </table>
      </div>
      </Card>
      </div>
    </>
  )
}

export default AllUser
