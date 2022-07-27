import React from 'react';
import { useParams } from 'react-router-dom';
import NavGame from '../components/Navgame';
import './game.css';

function Game(props) {
  const params = useParams();
  const backgroundImage = require(`../${
    props.games[params.gameId].background
  }`);

  return (
    <div className="game">
      <NavGame game={props.games[params.gameId]}  />
      <div className="game--container">
        <img
          className="game--background"
          src={backgroundImage}
          alt={props.games[params.name]}
        />
      </div>
    </div>
  );
}

export default Game;
