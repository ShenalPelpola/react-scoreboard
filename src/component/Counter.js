import React from "react";

const Counter = (props) => {
  let index = props.index;
  // use arrow functions when creating stateless functions in a class
  // because in a method this does'nt refer to the class itself
  // increamentScore = () => {
  //   this.setState({
  //     score: this.state.score + 1,
  //   });
  // };

  // react covents multiple setState calls into one single call for better perfomence
  // whenever we want to update the state based on the pevious state we need to pass a function instead
  // function argiment is the previous state

  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => props.changeScore(index, -1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{props.score}</span>
      <button
        className="counter-action increment"
        onClick={() => props.changeScore(index, 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
