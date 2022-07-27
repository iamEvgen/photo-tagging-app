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

  return (
    <div className="navGame">
      <div className="navgame--counter">00:07</div>
      <img className="navgame-hero-avatar" src={heroAvatar1} alt={heroName1} />
      <img className="navgame-hero-avatar" src={heroAvatar2} alt={heroName2} />
      <img className="navgame-hero-avatar" src={heroAvatar3} alt={heroName3} />
      <Link className="navgame--home-link" to={'/'}>
        Home
      </Link>
      <Link className="navgame--leaderboard-link" to={'/leaderboard'}>
        Leaderboard
      </Link>
    </div>
  );
}

export default NavGame;
