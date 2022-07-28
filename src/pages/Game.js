import React from 'react';
import { useParams } from 'react-router-dom';
import NavGame from '../components/NavGame';
import HeroSelector from '../components/HeroSelector';
import './game.css';

function Game(props) {
  const params = useParams();
  const backgroundImage = require(`../${
    props.games[params.gameId].background
  }`);
  const cursor = require('../images/cursor.png');

  const [showHeroSelector, setShowHeroSelector] = React.useState(false);
  const [coords, setCoords] = React.useState({
    x: 0,
    y: 0,
    xInPercent: 0,
    yInPercent: 0,
    moveX: false,
    moveY: false,
  });
  // const [state, setState] = React.useState();

  function handleCoords(event) {
    showHeroSelectorToggle();
    const x = event.pageX;
    const y = event.pageY - 100;
    const xInPercent = x / event.target.offsetWidth;
    const yInPercent = y / event.target.offsetHeight;
    const offsetX = event.target.offsetWidth - event.pageX;
    const offsetY = event.target.offsetHeight - event.pageY + 100;
    setCoords({ x, y, xInPercent, yInPercent, offsetX, offsetY });
    console.log(`X: ${xInPercent}, Y: ${yInPercent}`);
  }

  function showHeroSelectorToggle() {
    setShowHeroSelector(!showHeroSelector);
  }

  const gameBackGroundStyle = showHeroSelector
    ? { cursor: 'auto' }
    : { cursor: `url(${cursor}) 50 50, auto` };

  return (
    <div className="game">
      <NavGame game={props.games[params.gameId]} />
      <div onClick={handleCoords} className="game--container">
        <img
          className="game--background"
          src={backgroundImage}
          alt={props.games[params.name]}
          style={gameBackGroundStyle}
        />
        {showHeroSelector && (
          <HeroSelector
            coords={coords}
            heroes={props.games[params.gameId].heroes}
          />
        )}
        {showHeroSelector && (
          <img
            style={{
              left: `${coords.x - 50}px`,
              top: `${coords.y - 50}px`,
              position: 'absolute',
            }}
            src={cursor}
            alt="cursor"
          />
        )}
      </div>
    </div>
  );
}

export default Game;
