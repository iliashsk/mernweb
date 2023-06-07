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

      <br/>
      
  
     <div class ="wrapper">

  

  <a href='tel:9563734519' align='right' style={{float:'right',marginLeft:'auto'}}><h1 >Call:9563734519</h1></a>

</div>

      <div align='center' >
      <h1 style={{color:'green'}}>Jonopriyo Textile and Fasion</h1>
      </div>

      <h3 align='center' style={{color:'red',fontSize:'20px'}}>Kaliachak </h3>
      <h4 align='center' style={{color:'blue',fontSize:'15px'}}>Good Quality Makes Priority </h4>
  
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={(window.innerwidth>720)?{marginLeft:'20px',marginRight:'20px'}:{marginLeft:'0px',marginRight:'0px'}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'500px'}} className="d-block w-100" src="carousel/jono1.jpeg" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px'}} className="d-block w-100" src="carousel/jono2.jpeg" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px'}} className="d-block w-100" src="carousel/jono3.jpeg" alt="Third slide"></img>
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
