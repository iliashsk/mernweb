import {useSearchParams,createSearchParams,useNavigate} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'

const SingleItem=()=>{
const [searchParams]=useSearchParams()
const category=searchParams.get('id');
const [src,setSrc]=useState('');
const navigate=useNavigate();
const data={category}

useEffect(()=>{
	axios.post("/single/photo",data)
.then(res=>{
	//console.log(res.data)
setSrc(res.data)
})
},[]);

const handleBuy=(e)=>{
	e.preventDefault();
        //console.log(e.target.id.value);

        navigate({
        pathname:'/order',
        search:createSearchParams({
        id:category,
        
        }).toString()
        });
}
return(<>
{(window.innerWidth>720)?
(<div style={{display:'flex'}}>

<div style={{width:'420px',height:'450px',marginLeft:'20px'}}>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'400px',width:'400px'}} className="d-block w-100" src={src.filename1} alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'400px',width:'400px'}} className="d-block w-100" src={src.filename2} alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'400px',width:'400px'}} className="d-block w-100" src={src.filename3} alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" id='carous'>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" d='carous'>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>


	<div style={{marginLeft:'30px',width:'100%'}}>
	<h4>{src.name}</h4>
	<h5>Price:{src.sellprice}</h5>
	<p><b>Descriptions</b>:{src.title}</p>
	<button><a style={{fontSize:'20px'}} onClick={handleBuy}>Buy</a></button>
	</div>
	

</div>)
:
(<>

<div style={{width:'420px',height:'450px'}}>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'450px',width:'95%'}} className="d-block w-100" src={src.filename1} alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'450px',width:'95%'}} className="d-block w-100" src={src.filename2} alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'450px',width:'95%'}} className="d-block w-100" src={src.filename3} alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" id='carous'>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" d='carous'>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>


	<div style={{marginLeft:'30px',width:'100%'}}>
	<h4>{src.name}</h4>
	<h5>Price:{src.sellprice}</h5>
	<p><b>Descriptions</b>:{src.title}</p>
  <button><a style={{fontSize:'20px'}} onClick={handleBuy}>Buy</a></button>
	</div>

</>)
}
	</>)
}
export default SingleItem