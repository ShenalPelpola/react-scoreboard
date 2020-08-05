import React, { Component } from "react";

class AddPlayerForm extends Component {
  // form element in react work differently from regular components
  // Initialize state for the value of the input
  state = {
    value: "",
  };

  playerInput = React.createRef();
  // event handler that updates the state
  //passed a dom event as a argument
  handleValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  //
  handleSubmit = (e) => {
    // if we don't use preventDefault() it will result in the browser posting a request back to the server
    // and reload the page
    e.preventDefault();
    if (this.state.value !== "") {
      this.props.addPlayer(this.playerInput.current.value);
    }
  };

  render() {
    // console.log(this.playerInput);
    return (
      <form onSubmit={this.handleSubmit}>
        {/* use self closing tags in form elements */}
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player's name"
          value={this.state.value}
          //listening for changes on the input
          onChange={this.handleValueChange}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default AddPlayerForm;
