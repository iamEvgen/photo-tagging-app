import React from 'react';
import { getPlayers } from '../utils/firebase';

function Leaderboard() {
  const [results, setResults] = React.useState([]);

  function getResults() {
    getPlayers().then((res) => setResults(res));

    setTimeout(() => {
      console.log(results);
    }, 2000);
  }

  return (
    <div>
      <button onClick={getResults}>print players</button>
    </div>
  );
}

export default Leaderboard;
