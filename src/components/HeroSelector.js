import React from 'react';
import './heroselector.css';

function HeroSelector(props) {
  const activeHeroes = [];
  props.heroes.forEach((hero) => {
    if (!hero.found) {
      activeHeroes.push(hero);
    }
  });

  const heroes = activeHeroes.map((hero) => {
    const heroAvatar = require(`../${hero.url}`);
    return (
      <div
        key={hero.heroId}
        className="heroSelector--hero"
        onClick={() => {
          props.handleHeroClick(props.coords.xInPercent, props.coords.yInPercent, hero.heroId);
        }}
      >
        <img className="heroSelector-avatar" src={heroAvatar} alt={hero.name} />
        <div className="heroSelector-name">{hero.name}</div>
      </div>
    );
  });

  const offset = { 1: 80, 2: 150, 3: 220 };
  const moveX = props.coords.offsetX < 220;
  const moveY = props.coords.offsetY < offset[activeHeroes.length];

  let style = {
    left: `${props.coords.x}px`,
    top: `${props.coords.y}px`,
    'border-radius': '0 20px 20px 20px',
  };
  if (moveX && !moveY) {
    style = {
      left: `${props.coords.x - 220}px`,
      top: `${props.coords.y}px`,
      'border-radius': '20px 0px 20px 20px',
    };
  } else if (!moveX && moveY) {
    style = {
      left: `${props.coords.x}px`,
      top: `${props.coords.y - offset[activeHeroes.length]}px`,
      'border-radius': '20px 20px 20px 0',
    };
  } else if (moveX && moveY) {
    style = {
      left: `${props.coords.x - 220}px`,
      top: `${props.coords.y - offset[activeHeroes.length]}px`,
      'border-radius': '20px 20px 0 20px',
    };
  }

  return (
    <div style={style} className="hero-selector">
      {heroes}
    </div>
  );
}

export default HeroSelector;
