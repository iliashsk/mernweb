import react,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Shop=()=>{

   ///////photo from dataabase////////////
  const [photo,setPhoto]=useState('');
useEffect(()=>{
  axios.get('http://localhost:5000/photo')
  .then((data)=>{
    
    setPhoto(data.data[0])
  })
},[])
const navigate=useNavigate()
  const onSubmit=()=>{
    return(<>
navigate('/regist');
      </>)
     

  }

console.log(photo)
	return(<>
  <br/><br/>
  <h1 align='center'>Check Out Our All Products</h1>




	<div className="container">
   <div className="card-deck mb-3 text-center">
    
        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/1.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/2.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/3.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>



      

      </div>

      <div className="card-deck mb-3 text-center">

    
        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/4.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/5.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/6.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        

      

      </div>

      <div className="card-deck mb-3 text-center">

    
        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/7.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/8.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div className="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/9.jpeg" height="100%" width="100%"></img>
          </div>
          <p>Price:contact to seller</p>
           <div className="card-body">
            <button type="submit" className="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        

      

      </div>
    </div>


	</>)
}
export default Shop;