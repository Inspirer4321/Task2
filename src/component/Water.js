import React, { Component } from 'react';

class WaterCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 14,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  handleIncrementByTen = () => {
    this.setState((prevState) => ({
      count: prevState.count + 10,
    }));
  };

  handleDecrementByTen = () => {
    this.setState((prevState) => ({
      count: prevState.count - 10,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <input type="text" value={`Вода: ${count}`} readOnly />
        <div>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleIncrementByTen}>+10</button>
          <button onClick={this.handleDecrement}>-</button>
          <button onClick={this.handleDecrementByTen}>-10</button>
        </div>
      </div>
    );
  }
}

export default WaterCounter;
