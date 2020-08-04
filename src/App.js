import React, { Component } from "react";
import Header from "./component/Header";
import Player from "./component/Player";
import AddPlayerForm from "./component/AddPlayerForm";

class App extends Component {
  constructor() {
    super();

    // The application state - The state where other components as well as the component it self uses the state
    // The application state is passed to other component via props
    this.state = {
      players: [
        {
          playerName: "Guil",
          score: 0,
          id: 1,
        },
        {
          playerName: "Treasure",
          score: 0,
          id: 2,
        },
        {
          playerName: "Ashley",
          score: 0,
          id: 3,
        },
        {
          playerName: "James",
          score: 0,
          id: 4,
        },
      ],
    };
  }

  prevPlayerID = 4;

  handleScoreChange = (index, value) => {
    if (this.state.players[index].score === 0 && value === -1) {
      return;
    }
    this.setState((prevstate) => ({
      score: (prevstate.players[index].score += value),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          playerName: name,
          score: 0,
          id: (this.prevPlayerID += 1),
        },
      ],
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };

  //render method
  render() {
    return (
      <div className="App scoreboard">
        <h1 className="display-5 mb-4 mt-4 headTitle">ScoreBoard</h1>
        {/* <ScoreBoard></ScoreBoard> */}
        {/* if number use {}  */}
        <Header title="Scoreboard" players={this.state.players} />
        {this.state.players.map((player, index) => (
          <Player
            key={player.id.toString()}
            id={player.id}
            index={index}
            playerName={player.playerName}
            score={player.score}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
