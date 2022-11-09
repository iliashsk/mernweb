import React from 'react';
class Regist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table border='1'>
          <tr><td>Name:</td>
         <td> <input type="text" value={this.state.value} onChange={this.handleChange} /></td></tr>
       
        <input type="submit" value="Submit" />
         </table>
      </form>
    );
  }
}
export default Regist;