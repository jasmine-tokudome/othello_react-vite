import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Game.css'

function Game() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
      <h1>Game Component</h1>
      <Board />
    </div>
    </>
  )
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick (){
    setValue('⚫︎');
  }

  return (
  <button
    className="square"
    onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const initialSquares = Array.from({ length: 6 }, () =>
    new Array(6).fill(null)
  );

  // 初期の配置を設定
  initialSquares[2][2] = "⚫︎";
  initialSquares[3][2] = "⚪︎";
  initialSquares[2][3] = "⚪︎";
  initialSquares[3][3] = "⚫︎";

  const [squares, setSquares] = useState(initialSquares);

console.log(squares);

  return (
  <>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
  <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row"> 
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </div>
  <div className="board-row">
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
    <Square />
  </div>
  </>
  )
 }

export default Game
