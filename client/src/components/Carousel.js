import React,{Component} from 'react';
import {MailOutlined,PhoneOutlined,EnvironmentOutlined,FacebookOutlined }
 from '@ant-design/icons';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (<>

      <br/><br/><br/>

      <h4 style={{textAlign:'right',color:'violet'}}><PhoneOutlined/>9563734519</h4>

      <h2 align='center' style={{color:'blue',fontSize:'30px'}}>
       <div>
       <img
        src="photo/logo.jpeg" 
       alt="logo">
       </img>
       </div>
      </h2>

      <h3 align='center' style={{color:'red',fontSize:'20px'}}>Kaliachak </h3>
      <h4 align='center' style={{color:'violet',fontSize:'15px'}}>Good Quality Makes Priority </h4>
  
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{zIndex:'0',marginLeft:'30px',marginRight:'30px'}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'500px',marginTop:'10px'}} className="d-block w-100" src="carousel/jono1.jpeg" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px',marginTop:'10px'}} className="d-block w-100" src="carousel/jono2.jpeg" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px',marginTop:'10px'}} className="d-block w-100" src="carousel/jono3.jpeg" alt="Third slide"></img>
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

    </>);
  }
}




export default Carousel;
