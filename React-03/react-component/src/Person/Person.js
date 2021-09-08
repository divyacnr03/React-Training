import React from 'react';

// const person = (props) => {
//   console.log(props);
//   return (
//     <div onClick={() => props.handleClick(props.index)}>
//       <p>I am a Person</p>
//       <p>My name is {props.name} and my age is {props.age}</p>
//       <p>count: {props.count}</p>
//     </div>
//   )
// }

class Person extends React.Component {

  constructor() {
    super();

    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      personId: 1
    }
    console.log("constructor.....")
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate")

    // if (newProps.count === this.props.count) {
    //   return false;
    // }

    return true;
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillReceiveProps.....")
  }

  UNSAFE_componentWillMount() {
    console.log("componentWillMount.....")
  }

  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate.....")
  }

  render() {
    console.log("render.....")
    return (
      <>
        <p>I am a Person</p>
        <p>My name is {this.props.name} and my age is {this.props.age}</p>
        <p>count: {this.props.count}</p>
        <p>Time: {this.state.currentTime}</p>
      </>
    )
  }

  componentDidMount() {
    console.log("componentDidMount.....")
    this.updateTime();
    //DOM manipulation
    // API Call
    // 1 - Person1
    // 2 - Person2
    // fetch('/getPersonDetails?id=1', (response) => {
    //   this.setState({ Persons: response.data })
    // })
  }

  componentDidUpdate() {
    console.log("componentDidUpdate.....");

    // fetch(`/getPersonDetails?id=${this.state.personId}`, (response) => {
    //   this.setState({ Persons: response.data })
    // })
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.title = "stoped"
  }

  updateTime = () => {
    this.timerId = setInterval(() => {
      this.setState({ currentTime: new Date().toLocaleTimeString() });
    }, 1000);
  }
}

export default Person;