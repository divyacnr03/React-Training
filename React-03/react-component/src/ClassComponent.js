import React, { Component } from 'react';

class ClassComponent extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange = (event) => {
    this.setState({ firstName: event.target.value });

    console.log(this.state.firstName)
  }

  updateFirstName = () => {
    document.getElementById('firstName').value = 'Custome Value';
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  shouldComponentUpdate(prevProps, PrevState) {
    if (prevProps.name !== this.props.name) {
      return true;
    }

    return false;
  }

  // updateFirstName()

  // Async
  render() {
    return (
      <div style={{ "margin": "20px" }}>
        <h1>Class Component</h1>
        <input
          id="firstName"
          name="firstName"
          onChange={(event) => { this.handleFirstNameChange(event) }}
        /> <br /> <br />
        <input
          id="lastName"
          name="lastName"
          onChange={(event) => { this.handleLastNameChange(event) }}
        />
        <br />
        <label>{this.state.firstName + ' ' + this.state.lastName}</label>
      </div>
    )
  }



}

export default ClassComponent;