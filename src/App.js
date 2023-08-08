import { useState } from 'react';
import './App.css';
import Solution from './components/solution';
import Score from './components/score';
import Letters from './components/letters';
import EndGame from './components/endGame';
import RestartGame from './components/restartGame';

function App() {

  const generateLetterStatuses = () => {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  const selectLetter = (l) => {
    updateScore(l)
    setLetterStatus({...letterStatus, [l]:true })
  }

  const updateScore = (letter) => {
    let guessedLetterQuantity = (solution.word.match(new RegExp(letter, "g")) || []).length

    if(guessedLetterQuantity){
      setScore(score + 5*guessedLetterQuantity)
      setSolution({...solution, guessedLetters: solution.guessedLetters + 1*guessedLetterQuantity})
    } else {
      setScore(score - 20)
    }
  }

  const restartGame = () => {
    setSolution({word:'REACT', hint: 'One of the most famous JS frameworks', guessedLetters:0})
    setScore(100)
    setLetterStatus(generateLetterStatuses())
  }

  let [solution, setSolution] = useState({word:'REACT', hint: 'One of the most famous JS frameworks', guessedLetters:0})
  let [score, setScore] = useState(100)
  let [letterStatus, setLetterStatus] = useState(generateLetterStatuses())

  return (
    <div className="container container-app">
      <Score score={score} />
      <Solution solution={solution} letterStatus={letterStatus} />

      {(score <= 0 || solution.word.length == solution.guessedLetters) ? 
        <EndGame win={(score > 0)}/> 
        : 
        <Letters letterStatus={letterStatus} update={selectLetter} />
      }

      <RestartGame restart={restartGame} />
    </div>
  );
}

export default App;
