import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/game/:id"
          element={<Game />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;