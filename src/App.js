import React, { useState } from 'react';
import Game from './components/Game';
import Heading from './components/Heading';
import Bottom from './components/UI/Bottom/Bottom';
import MyButton from './components/UI/myButton/MyButton';
import { useStart } from './hooks/useStart';
import './styles/App.css';
import { getRandom } from './utils/getRandom';

function App() {
  const [tiles, setTiles] = useState([]) 
  
  const [win, setWin] = useState(false)
  
  const [score, setScore] = useState(0)


  const [scoreDifference, setScoreDifference] = useState(0)


  const startGame = () => {
    setWin(false)
    setScore(0)
    localStorage.setItem('score', '')
    localStorage.setItem('tiles', '')

    const index1 = getRandom(1, 16)
    let index2 = getRandom(1, 16)

    while (index1 === index2) {index2 = getRandom(1, 16)}

    const arr = Array(16).fill(0)

    arr[index1] = (getRandom(1, 10) === 1) ? 4 : 2
    arr[index2] = 2
    
    setTiles([...arr])
  }

  useStart(startGame, setTiles)

  return (
    <div className="App">
      <Heading 
        score={score} 
        scoreDifference={scoreDifference}
        setScore={setScore}
      />
      <div className="new__game">
      <MyButton onClick={startGame}>New game</MyButton>
      </div>
      <Game 
        tiles={tiles} 
        setTiles={setTiles} 
        startGame={startGame} 
        win={win} setWin={setWin} 
        score={score}
        setScore={setScore}
        setScoreDifference={setScoreDifference}    
      />
      <Bottom/>
    </div>
  );
}

export default App;
