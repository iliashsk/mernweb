import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import App from '../components/App'
import AppMain from '../AppMain'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link,NavLink } from "react-router-dom";
import ActiveMenuLink from "active-menu-link"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pass: '',
      email: '',
      sec:'',
     
    };
    this.log={
      email:''
    }
  }

   
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = e => {
    
    e.preventDefault();

    const { pass,email } = this.state;

    const book = {
      pass,
      email
     }

    axios
      .post("/login", book)
      .then((logdata) =>{
        console.log(logdata);
        this.setState({sec:logdata.data[0].email}) ;
        console.log(this.state.email); 
      })
      
      .catch(err => {
        console.error("error detected");
      });
      



  };
  obarray=arr=>{
        const keys=Object.keys(this.state);
        const name=keys[0];
        return name;

      }

  render() {
    return (
      <div style={{float:"Right",marginRight:"50px"}}>
        <br />
        <div className="">
        <h1>Login Here</h1>
          <form onSubmit={this.handleSubmit}>
          <table border='1'>
           <tr>
          <td>Email:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="email"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
             <tr>
          <td>Password:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="pass"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
             
           
             
             <tr align="center"><Button/></tr>
            
            </table>
          </form>
        </div>
        <div>{this.state.sec?<div><Link to="/rating"/>trying to log in and refferign g it </div>:<h2></h2>}</div>
    
      </div>
    );
  }
}

export default Login;