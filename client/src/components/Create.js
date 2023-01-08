import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button'


class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
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

  render(req,res) {
    return (<>
      <div style={{marginRight:"50px"}}>
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
                value="iliash sk"
                placeholder={"type your "+Object.keys(this.state)[0] +" here"}
                onChange={this.handleInputChange}
              readOnly/>
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
      {/*////////////////////////////////////////////////////////*/}
      <form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input
       type="text"
        class="form-control is-valid" id="validationServer01"
          placeholder="First name"
           value=""
            required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text"
       class="form-control is-valid"
         id="validationServer02"
          placeholder="Last name"
           value="Otto"
            required />
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input
         type="text"
          class="form-control
           is-invalid"
            id="validationServerUsername"
             placeholder="Username"
              aria-describedby="inputGroupPrepend3"
               required />
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input
       type="text"
        class="form-control
         is-invalid"
          id="validationServer03"
           placeholder="City"
            required />
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required />
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required />
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
      </>
    );
  }
}

export default Create;