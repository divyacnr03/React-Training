import React, { Component } from 'react';
import HOC from './HOC';

import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Shefali", age: 18 },
      { id: "2", name: "Shivani", age: 18 },
      { id: "3", name: "Arpit", age: 21.4 }
    ],
    count: 0
  }

  removePerson = index => {
    const newPersonsCopy = [...this.state.persons];
    newPersonsCopy.splice(index, 1);

    this.setState({ persons: newPersonsCopy }, () => {
      console.log("new state: ", this.state.persons);
    });
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {

    console.log("App.js....")
    return (
      <HOC>
        <h1>Hi I'm React App</h1>
        <p>Cliked: <span id="count">{this.state.count}</span></p>
        <button onClick={() => this.handleClick()}>Click Me!!</button>
      </HOC>
      // { this.state.count === 0 ? <Person count={this.state.count} /> : null }
      /* {
            this.state.persons.map((person, index) => {
              return <Person count={this.state.count} key={person.id} index={index} name={person.name} age={person.age} handleClick={this.removePerson} />
            })
          } */
    );
  }
}

export default App;
