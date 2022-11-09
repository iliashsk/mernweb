import React, {Component,useState} from 'react';
//import logo from './logo.svg';
//import '../App.css';




class App extends Component {
  
   callBackendAPI = async () => {
    const response = await fetch('/api');
    const form = await response.json();
    if (response.status !== 200) {
      throw Error(form.message) 
    }
    return form;
  };

  state={};
   componentDidMount() {
    this.callBackendAPI()
      .then(res =>{
      	for(var i=0;i<res.length;i++){
          delete res[i]._id;
         delete res[i].__v;
      		this.setState(
      	res[i]
      
      )
      	}}
      	);
  };



  


  render() {
   

    return (
      
      <div align="center" className="app">
       
        <h1>Your Details Booklist</h1>
        <table>
       
       <tr>{Object.values(this.state).map(key => <div key={key}>{key}</div>)}</tr>
       </table>
        </div>
    );
  }
}


export default App;
