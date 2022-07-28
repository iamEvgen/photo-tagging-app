import React from 'react';
import { useParams } from 'react-router-dom';
import NavGame from '../components/NavGame';
import HeroSelector from '../components/HeroSelector';
import initGames from '../utils/initGames';
import Alert from '../components/Alert';
import './game.css';

function Game(props) {
  const [games, setGames] = React.useState(initGames);
  const [showHeroSelector, setShowHeroSelector] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState({
    show: false,
    message: '',
    color: 'green',
  });
  const [coords, setCoords] = React.useState({
    x: 0,
    y: 0,
    xInPercent: 0,
    yInPercent: 0,
    moveX: false,
    moveY: false,
  });

  const gameId = useParams().gameId;
  const backgroundImage = require(`../${games[gameId].background}`);
  const cursor = require('../images/cursor.png');

  function handleCoords(event) {
    showHeroSelectorToggle();
    const x = event.pageX;
    const y = event.pageY - 100;
    const xInPercent = x / event.target.offsetWidth;
    const yInPercent = y / event.target.offsetHeight;
    const offsetX = event.target.offsetWidth - event.pageX;
    const offsetY = event.target.offsetHeight - event.pageY + 100;
    setCoords({ x, y, xInPercent, yInPercent, offsetX, offsetY });
    // console.log(`X: ${xInPercent}, Y: ${yInPercent}`);
  }

  function showHeroSelectorToggle() {
    setShowHeroSelector(!showHeroSelector);
  }

  function handleHeroClick(xInPercent, yInPercent, heroId) {
    const newGames = games;
    let searchResult = false;
    let heroName;
    newGames[gameId].heroes.forEach((hero) => {
      if (
        heroId === hero.heroId &&
        xInPercent > hero.coords.xMin &&
        xInPercent < hero.coords.xMax &&
        yInPercent > hero.coords.yMin &&
        yInPercent < hero.coords.yMax
      ) {
        heroName = hero.name;
        hero.found = true;
        searchResult = true;
      }
    });
    setGames(newGames);

    if (searchResult) {
      setShowAlert({
        show: true,
        message: `Good job! ${heroName} is found!`,
        color: '#74992e',
      });
    } else {
      setShowAlert({ show: true, message: 'Nope! Try again!', color: '#f5bf2b' });
    }
    setTimeout(() => {
      setShowAlert({
        ...showAlert,
        show: false,
      });
    }, 2000);
  }

  const gameBackGroundStyle = showHeroSelector
    ? { cursor: 'auto' }
    : { cursor: `url(${cursor}) 50 50, auto` };

  return (
    <div className="game">
      <NavGame game={games[gameId]} />
      <div onClick={handleCoords} className="game--container">
        <img
          className="game--background"
          src={backgroundImage}
          alt={games[gameId].name}
          style={gameBackGroundStyle}
        />
        {showHeroSelector && (
          <HeroSelector
            coords={coords}
            heroes={games[gameId].heroes}
            handleHeroClick={handleHeroClick}
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
        {showAlert.show && (
          <Alert message={showAlert.message} color={showAlert.color} />
        )}
      </div>
    </div>
  );
}

export default Game;
