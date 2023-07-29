import logo from './logo.svg';
import './App.css';
import Heroes from './components/Heroes';
import { useState } from 'react';

function App() {

  const [score, setScore] = useState(0)
  const [topScore, setTopScore] = useState(0)

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  const handleTopScore = () => {
    if (score > topScore) {
      setTopScore(score);
    }
  };
  
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Superheroes React Memory Game</h1>
        <div>Score: {score}</div>
        <div>TOP Score: {topScore}</div>
      </nav>
      <div className="rules">
        <h2>Get points by clicking on an image but don't click on any more than once!</h2>
      </div>
      <Heroes handleScore={handleScore} handleTopScore={handleTopScore}/>
    </div>
  );
}

export default App;
