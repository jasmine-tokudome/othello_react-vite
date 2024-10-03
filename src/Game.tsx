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

function Square({value, onSquareClick}) {

  return (
  <button
    className="square"
    onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

function Board() {
  const [blackIsNext, setBlackIsNext] = useState(true);
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

function handleClick(row, col) {
  const nextSquares = squares.map((r) => r.slice()); // 2次元配列をコピー
  if (!nextSquares[row][col]) { // すでに値がある場合は上書きしない
    nextSquares[row][col] = "⚫︎";
    setSquares(nextSquares);
  }
  if (blackIsNext) {
      nextSquares[row][col] = "⚫︎";
    } else {
      nextSquares[row][col] = "⚪︎"
    }
    setBlackIsNext(!blackIsNext)
}

  return (
    <>
      {squares.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((value, colIndex) => (
            <Square
              key={colIndex}
              value={value}
              onSquareClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
 }

export default Game
