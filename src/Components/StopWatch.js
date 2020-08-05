import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  };

  // use both of these methds together
  // while the component is mounted on to the dom
  // called by react automatically
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  // since components don't always stay in the dom react also provides
  // a componentWillUnmount method for prevent memory leaks
  // for clearing timers cancelling network request

  //before conponet is destroyed
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
      });
    }
  };

  handleStopWatch = () => {
    this.setState((prevstate) => ({
      isRunning: !prevstate.isRunning,
    }));
    if (!this.state.isRunning) {
      this.setState({ previousTime: Date.now() });
    }
  };

  handleReset = () => {
    this.setState({ elapsedTime: 0 });
  };

  render() {
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{seconds}</span>
        <button onClick={this.handleStopWatch}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
