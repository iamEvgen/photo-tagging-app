import React from 'react';
import { Link } from 'react-router-dom';
import './navhome.css';

function NavHome() {
  const ratingIcon = require('../images/rating.png');
  const homeIcon = require('../images/home.png');

  return (
    <div className="navHome">
      <div className="navhome--logo">Photo tagging app</div>
      <Link className="nav-link" to={'/'}>
        <img
          className="nav-icon navgame--home"
          src={homeIcon}
          alt="rating icon"
        />
        Home
      </Link>
      <Link className="nav-link" to={`/leaderboard`}>
        <img className="nav-icon" src={ratingIcon} alt="rating icon" />
        Leaderboard
      </Link>
    </div>
  );
}

export default NavHome;
