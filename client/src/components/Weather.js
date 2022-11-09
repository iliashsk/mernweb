import React, {Component,useState} from 'react';
//import logo from './logo.svg';
//import '../App.css';




class Weather extends Component {
  
   callBackendAPI = async () => {
    const response = await fetch('/weather');
    const form = await response.json();
    if (response.status !== 200) {
      throw Error(form.message)
    }
    return form;
  };
  
  
state = [];

  componentDidMount() {
    this.callBackendAPI()
    .then(res=>res.json())
      .then(res =>this.setState(res))
      .catch(err => console.log(err));
  }


    // fetching the GET route from the Express server which matches the GET route from server.js
  



  render() {
      
 
    
    return (
      
      <div align="center" className="app">
        <h2>{this.props.name}</h2 >
        
      
        <tr> {Object.keys(this.state).map(key => <li key={key}>{key}</li>)}</tr>
       <tr>{Object.values(this.state).map(val => <div key={val}>{val}</div>)}</tr>
        

        </div>
    );
  }
}


export default Weather;

