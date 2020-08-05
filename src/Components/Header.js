import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

const Header = (props) => {
  const { players, title } = props;

  return (
    <header>
      <Stats players={players}></Stats>
      <h1>{title}</h1>
      <StopWatch></StopWatch>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.object),
};
export default Header;
