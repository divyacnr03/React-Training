import React, { Component } from 'react';

import './paragraph.css';

export default class Paragraph extends Component {

  state = {
    clicked: false
  }

  render() {
    return (
      // <p className="options " onClick={() => alert('clicked')}>{this.props.text}</p>
      <p className={this.state.clicked ? "options red" : "options"} onClick={() => this.setState({ clicked: !this.state.clicked })}>{this.props.text}</p>
    )
  }
}