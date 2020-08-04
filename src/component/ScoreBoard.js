import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";

class ScoreBoard extends Component {
  constructor() {
    super();

    // The application state - The state where other components as well as the component it self uses the state
    // The application state is passed to other component via props
    this.state = {
      players: [
        {
          playerName: "Guil",
          score: 50,
          id: 1,
        },
        {
          playerName: "Treasure",
          score: 85,
          id: 2,
        },
        {
          playerName: "Ashley",
          score: 95,
          id: 3,
        },
        {
          playerName: "James",
          score: 80,
          id: 4,
        },
      ],
    };
  }

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        {/* if number use {}  */}
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />
        {this.state.players.map((player) => (
          <Player
            key={player.id.toString()}
            playerName={player.playerName}
            id={player.id}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default ScoreBoard;
