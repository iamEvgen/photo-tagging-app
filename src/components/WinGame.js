import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { writeResult } from '../utils/firebase';
import './wingame.css';

function WinGame(props) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    setName(event.target.value);
  }

  function saveResult(event) {
    event.preventDefault();
    writeResult(name, props.savedTimer, props.gameId, props.gameName);
    console.log(
      'data saved: ' +
        name +
        ' ' +
        props.savedTimer +
        ' ' +
        props.gameId +
        ' ' +
        props.gameName
    );
    navigate('/leaderboard');
  }

  return (
    <div className="win-game-message">
      <div>Сongratulations! You found them all in {props.savedTimer}</div>
      <form onSubmit={(event) => saveResult(event)} className="win-game-form">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
          name="Name"
          value={name}
        />
        <button>Save result</button>
      </form>
    </div>
  );
}

export default WinGame;
