import React,{Component} from 'react';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
 
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (<>
  
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{zIndex:'0'}}>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:'500px',marginTop:'10px'}} className="d-block w-100" src="corousel/sch1.jpg" alt="First slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px',marginTop:'10px'}} className="d-block w-100" src="corousel/sch2.jpg" alt="Second slide"></img>
    </div>
    <div className="carousel-item">
      <img style={{height:'500px',marginTop:'10px'}} className="d-block w-100" src="corousel/sch3.jpg" alt="Third slide"></img>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

    </>);
  }
}




export default About;
