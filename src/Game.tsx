import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Game.css'

function Game() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="board-row">
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
    <div className="board-row">
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
    <div className="board-row">
    <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
    <div className="board-row">
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
    <div className="board-row"> 
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
    <div className="board-row">
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
      <Square value="1" />
    </div>
    </>
    );
}

function Square({value}) {
  return <button className="square">{value}</button>;
}

export default function Board
