// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// Data
import {wordsList} from "./data/words"

// components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}

]

function App() {

    const [gameStage, setGameStage] = useState(stages[0].name);
    const wordsState = useState(wordsList);
    const words = wordsState[0];


    console.log(words)

  return (
    <>
      <div className='App'>
         {gameStage === "start" && <StartScreen />}
         {gameStage === "game" && <Game />}
         {gameStage === "end" && <GameOver />}
      </div>
    </>
  )
}

export default App