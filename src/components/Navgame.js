import React from 'react';
import { Link } from 'react-router-dom';
import './navgame.css';

function NavGame(props) {
  const heroAvatar1 = require(`../${props.game.heroes[0].url}`);
  const heroName1 = props.game.heroes[0].name;
  const heroAvatar2 = require(`../${props.game.heroes[1].url}`);
  const heroName2 = props.game.heroes[1].name;
  const heroAvatar3 = require(`../${props.game.heroes[2].url}`);
  const heroName3 = props.game.heroes[2].name;

  const ratingIcon = require('../images/rating.png');
  const homeIcon = require('../images/home.png');
  const reloadIcon = require('../images/reload.png');

  const avatarStyles = [];
  props.game.heroes.forEach((hero) => {
    if (hero.found) {
      avatarStyles.push({ opacity: 0.5 });
    } else {
      avatarStyles.push({});
    }
  });

  return (
    <div className="navGame">
      <div className='navgame--spacer'></div>
      <div className="timerAndReloader">
        <div className="navgame--counter">{props.timer}</div>
        <img onClick={props.resetGame} className="nav-icon reload-button" src={reloadIcon} alt="reload icon" />
      </div>
      <img
        className="navgame--hero-avatar need-margin-left"
        src={heroAvatar1}
        alt={heroName1}
        style={avatarStyles[0]}
      />
      <img
        className="navgame--hero-avatar"
        src={heroAvatar2}
        alt={heroName2}
        style={avatarStyles[1]}
      />
      <img
        className="navgame--hero-avatar need-margin-right"
        src={heroAvatar3}
        alt={heroName3}
        style={avatarStyles[2]}
      />
      <Link className="nav-link" to={'/'}>
        <img
          className="nav-icon navgame--home"
          src={homeIcon}
          alt="rating icon"
        />
        Home
      </Link>
      <Link className="nav-link" to={'/leaderboard'}>
        <img className="nav-icon" src={ratingIcon} alt="rating icon" />
        Leaderboard
      </Link>
    </div>
  );
}

export default NavGame;
