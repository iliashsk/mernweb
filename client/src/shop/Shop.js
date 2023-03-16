import react from 'react';
import {useNavigate} from 'react-router-dom'

const Shop=()=>{

const navigate=useNavigate()
  const onSubmit=()=>{
    return(<>
navigate('/regist');
      </>)
  }
	
	return(<>
  <br/><br/>
  <h1 align='center'>Check Out Our All Products</h1>
	<div class="container">
   <div class="card-deck mb-3 text-center">

    
        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/1.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/2.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/3.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>



      

      </div>

      <div class="card-deck mb-3 text-center">

    
        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/4.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/5.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/6.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        

      

      </div>

      <div class="card-deck mb-3 text-center">

    
        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/7.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/8.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        <div class="card mb-4 box-shadow" style={{backgroundImage:' linear-gradient(to right,lightgreen,lightblue,#aa7566)'}}>
      <form onSubmit={onSubmit} >
          <div><img src="photo/9.jpeg" height="200px" width="320px"></img>
          </div>
          <p>Price:contact to seller</p>
           <div class="card-body">
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Buy</button>
           </div>
           </form>
        </div>

        

      

      </div>
    </div>


	</>)
}
export default Shop;