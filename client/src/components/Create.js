import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button'


class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'fsadfs',
      email: '',
      phone: '',
      address:'',
      grade:'',
      favsub:'',
    };
  }

   
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = e => {
    
    e.preventDefault();

    const { name,email, phone,address,grade,favsub } = this.state;

    const book = {
      name,
      email,
      phone,
      address,
      grade,
      favsub,
    };

    axios
      .post("/create", book)
      .then(() =>
        console.log("hhoioiuoi"))
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
        <h1>{this.props.name}</h1>
          <form onSubmit={this.handleSubmit}>
          <table border='1'>
          <tr>
          <td>Name:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="name"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
             <tr>
          <td>Email:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="email"
                placeholder={"type your "+Object.keys(this.state)[1] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
            <tr>
          <td>Phone No:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="phone"
                placeholder={"type your "+Object.keys(this.state)[2] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
             <tr>
          <td>Address:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="address"
               placeholder={"type your "+Object.keys(this.state)[3] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
             <tr>
          <td>Highest Grade:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="grade"
               placeholder={"type your "+Object.keys(this.state)[4] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
             <tr>
          <td>Favourite Subject:</td>
          <td>
            
              <input
                type="text"
                className=""
                name="favsub"
                placeholder={"type your "+Object.keys(this.state)[5] +" here"}
                onChange={this.handleInputChange}
              />
            </td></tr>
            
             
             <tr align="center"><Button/></tr>
            
            </table>
          </form>
        </div>
    
      </div>
    );
  }
}

export default Create;