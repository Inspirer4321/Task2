import React, { Component } from "react";


class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["orange", "purple", "gray", "brown", "blue"],
      currentIndex: 0,
      text: "Text inside the box",
    };
  }

  handleChangeColor = () => {
    const { colors, currentIndex } = this.state;
    const nextIndex = (currentIndex + 1) % colors.length;
    const newText = `Text ${colors[nextIndex]}`;
    this.setState({ currentIndex: nextIndex, text: newText });
  };

  render() {
    const { colors, currentIndex, text } = this.state;
    const boxClassName = `myBox myBox-${colors[currentIndex]}`;

    return (
      <div>
        <div className={boxClassName}>
          {text}
          <button onClick={this.handleChangeColor}>Change Color</button>
        </div>
      </div>
    );
  }
}

export default Box;
