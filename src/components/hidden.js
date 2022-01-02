import React, { Component } from "react";

export default class Hidden extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
      text: "Now you see me",
    };
  }

  componentDidMount() {
    alert(`Is component hidden? ${!this.state.isShown}`);
  }

  componentDidUpdate() {
    alert(`Is component hidden? ${!this.state.isShown}`);
  }

  
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isShown: !this.state.isShown })}>
          Show/hide
        </button>
        {this.state.isShown && <div>{this.state.text}</div>}
      </div>
    );
  }
}
