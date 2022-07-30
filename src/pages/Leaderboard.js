import React from 'react';
import { getPlayers } from '../utils/firebase';
import NavHome from '../components/NavHome';
import './leaderboard.css';
import uniqid from 'uniqid';

function Leaderboard() {
  // const [results, setResults] = React.useState([]);
  const [splitResults, setSplitResults] = React.useState([]);
  const [selectedGame, setSelectedGame] = React.useState(0);

  React.useEffect(() => {
    getPlayers().then((res) => {
      // setResults(res);
      setSplitResults([
        res.filter((result) => result.gameId === '0'),
        res.filter((result) => result.gameId === '1'),
        res.filter((result) => result.gameId === '2'),
      ]);
    });
  }, []);

  const gamePoster1 = require(`../images/games/robot-city-main.jpeg`);
  const gamePoster2 = require(`../images/games/underground-main.jpeg`);
  const gamePoster3 = require(`../images/games/cyberpunk-main.jpeg`);

  function handleGameIconClick(number) {
    setSelectedGame(number);
  }

  const selectedGameStyle = { boxShadow: '0px 0px 10px 5px white' };

  let rows;
  if (splitResults.length > 0) {
    rows = splitResults[selectedGame]
      .sort((a, b) => {
        if (a.time > b.time) {
          return 1;
        } else if (a.time < b.time) {
          return -1;
        } else {
          return 0;
        }
      })
      .slice(0, 20)
      .map((result) => {
        return (
          <tr key={uniqid()}>
            <td className="table-data">{result.name}</td>
            <td className="table-data">{result.time}</td>
            <td className="table-data">{result.date}</td>
          </tr>
        );
      });
  }

  return (
    <div>
      <NavHome />
      <div className="leaderboard--content">
        <div className="leaderboard--games">
          <div
            style={selectedGame === 0 ? selectedGameStyle : {}}
            className="leaderboard--image-container"
            onClick={() => handleGameIconClick(0)}
          >
            <img
              className="leaderboard--image"
              src={gamePoster1}
              alt="robot city poster"
            />
            <div className="home--text-on-image">Robo City</div>
          </div>
          <div
            style={selectedGame === 1 ? selectedGameStyle : {}}
            className="leaderboard--image-container"
            onClick={() => handleGameIconClick(1)}
          >
            <img
              className="leaderboard--image"
              src={gamePoster2}
              alt="robot city poster"
            />
            <div className="home--text-on-image">Universe 113</div>
          </div>
          <div
            style={selectedGame === 2 ? selectedGameStyle : {}}
            className="leaderboard--image-container"
            onClick={() => handleGameIconClick(2)}
          >
            <img
              className="leaderboard--image"
              src={gamePoster3}
              alt="robot city poster"
            />
            <div className="home--text-on-image">Cyberpunk</div>
          </div>
        </div>

        <table className="leaderboard--table">
          <tbody>
            <tr>
              <th className="table-data">Name</th>
              <th className="table-data">Time</th>
              <th className="table-data">Date</th>
            </tr>
            {rows && rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
