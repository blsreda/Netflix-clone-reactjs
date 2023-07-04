import { Route, Routes } from 'react-router-dom';
import Netflix from './pages/Netflix';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TV from './pages/Tv';
import SignInPage from './pages/SignInPage';
import PlayerPage from './pages/PlayerPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Netflix/> } />
        <Route path="/home" element={ <Home/> } />
        <Route path="/movies" element={ <Movies/> } />
        <Route path="/tv" element={ <TV/> } />
        <Route path="/signin" element={ <SignInPage/> } />
        <Route path="/player" element={ <PlayerPage/> } />
      </Routes>
    </div>
  );
}

export default App;
