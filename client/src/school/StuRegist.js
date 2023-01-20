import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/Button'


class StuRegist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      mobile: '',
      village:'',
      state:'',
      pin:'',
      math: '',
      phys: '',
      chem: '',
      eng:'',
      ben:'',
      hin:'',
      cat:''
    };
  }

   
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = e => {
    
    e.preventDefault();

    const {
      name,
email,
mobile,
village,
state,
pin,
math,
phys,
chem,
eng,
ben,
hin,
cat
} = this.state;

    const book = {
      name,email,mobile,village,
state,
pin,
math,
phys,
chem,
eng,
ben,
hin,
cat
    };

    axios
      .post("/apis/users", book)
      .then(() =>
        console.log("hhoioiuoi"))
      .catch(err => {
        console.error("error detected");
      });
      

    this.setstate({
      name: '',
      email: '',
      mobile: '',
      village:'',
      state:'',
      pin:'',
      math: '',
      phys: '',
      chem: '',
      eng:'',
      ben:'',
      hin:'',
      cat:''
    });

  };

  render(req,res) {
    return (<>
      
      <form onSubmit={this.handleSubmit}>
      <h1 align='center' style={{color:'blue'}}>Student Registration Form</h1>

      <h6>Student Address</h6>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">Name:</label>
      <input
                type="text"
                className=""
                name="name"
               
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />
    
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Village:</label>
            <input
                type="text"
                className=""
                name="village"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Moblie:</label>
            <input
                type="text"
                className=""
                name="mobile"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    
  </div>

  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">email</label>
      <input
                type="email"
                className=""
                name="email"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">State:</label>
            <input
                type="text"
                className=""
                name="state"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Pin</label>
            <input
                type="number"
                className=""
                name="pin"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    
  </div>
{/*//////////////////////////////*/}

        <h6>Student Marks</h6>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">Mathematics:</label>
      <input
                type="number"
                className=""
                name="math"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />
    
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Physics:</label>
            <input
                type="number"
                className=""
                name="phys"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Chemistry:</label>
            <input
                type="number"
                className=""
                name="chem"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    
  </div>

  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">English</label>
      <input
                type="number"
                className=""
                name="eng"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Hindi</label>
            <input
                type="number"
                className=""
                name="hin"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Bengali</label>
            <input
                type="number"
                className=""
                name="ben"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
     <div class="col-md-4 mb-3">
      <label for="validationServer02">category</label>
            <input
                type="text"
                className=""
                name="cat"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
        />

    </div>
    
  </div>


  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
      </>
    );
  }
}

export default StuRegist;