import React, { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      value3: "",
      isShown: false,
      val1: "",
      val2: "",
      val3: "",
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ isShown: true });
  };

  onChangeHandler1 = (e) => {
    e.preventDefault();
    this.setState({ value1: e.target.value });
  };

  onChangeHandler2 = (e) => {
    e.preventDefault();
    this.setState({ value2: e.target.value });
  };

  onChangeHandler3 = (e) => {
    e.preventDefault();
    this.setState({ value3: e.target.value });
  };

  onChangeHandler4 = (e) => {
    e.preventDefault();
    this.setState({
      val1: e.target.value,
      val2: e.target.value * 0.5,
      val3: e.target.value * 0.05,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            value={this.state.value1}
            onChange={this.onChangeHandler1}
          />
          <input
            type="text"
            value={this.state.value2}
            onChange={this.onChangeHandler2}
          />
          <input
            type="text"
            value={this.state.value3}
            onChange={this.onChangeHandler3}
          />

          <button type="submit">Submit</button>
        </form>
        {this.state.isShown && <div>{JSON.stringify(this.state)}</div>}

        <form>
          <input
            type="text"
            value={this.state.val1}
            onChange={this.onChangeHandler4}
          />
          <input type="text" defaultValue={this.state.val2} />
          <input type="text" defaultValue={this.state.val3} />
        </form>
      </div>
    );
  }
}
