import React from 'react';
import { Link } from 'react-router-dom';
import NavHome from '../components/NavHome';

function Home() {
  const gamePoster1 = require(`../images/games/robot-city-main.jpeg`);
  const gamePoster2 = require(`../images/games/underground-main.jpeg`);
  const gamePoster3 = require(`../images/games/cyberpunk-main.jpeg`);

  return (
    <div>
      <NavHome />
      <div className='home--content'>
        <div className='home--title'>Choose a level:</div>
        <div className="home--games">
        <Link className='home--image-container' to={`/game/0`}>
          <img className="home--image" src={gamePoster1} alt="robot city poster" />
          <div className='home--text-on-image'>Robo City</div>
        </Link>
        <Link className='home--image-container' to={`/game/1`}>
          <img className="home--image" src={gamePoster2} alt="robot city poster" />
          <div className='home--text-on-image'>Universe 113</div>
        </Link>
        <Link className='home--image-container' to={`/game/2`}>
          <img className="home--image" src={gamePoster3} alt="robot city poster" />
          <div className='home--text-on-image'>Cyberpunk</div>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;
