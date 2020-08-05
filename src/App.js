import React, { Component } from "react";
import Header from "./Components/Header";
import Player from "./Components/Player";
import AddPlayerForm from "./Components/AddPlayerForm";

class App extends Component {
  constructor() {
    super();

    // The application state - The state where other components as well as the component it self uses the state
    // The application state is passed to other component via props
    this.state = {
      players: [
        {
          playerName: "player 1",
          score: 0,
          id: 1,
          highest: false,
        },
        {
          playerName: "player 2",
          score: 0,
          id: 2,
          highest: false,
        },
        {
          playerName: "player 3",
          score: 0,
          id: 3,
          highest: false,
        },
        {
          playerName: "player 4",
          score: 0,
          id: 4,
          highest: false,
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
    let newPlayer = {
      playerName: name,
      score: 0,
      id: (this.prevPlayerId += 1),
    };
    this.setState((prevState) => ({
      players: prevState.players.concat(newPlayer),
    }));
  };

  getHighScore = () => {
    const scores = this.state.players.map((p) => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };

  //render method
  render() {
    const highScore = this.getHighScore();
    return (
      <div className="App scoreboard">
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
            isHighScore={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
