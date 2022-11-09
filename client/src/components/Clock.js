import React,{Component} from 'react';
class Clock extends Component {
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
    return (
      <div className="clock">
       
        <h1 align="right" style={{color:'red'}} className="App">Time: {this.state.date.toLocaleTimeString()}.</h1>
      <h2 align="center">About Our website</h2>
      <p>Hello, This is Iliash sk.A web Application developer.I am working in my own company Softech 
      Technology.</p>
      </div>
    );
  }
}




export default Clock;
