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
      <p>
      <div className="board-row">
        <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button>
        <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button>
      </div>
      <div className="board-row">
        <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button>
        <button className="square">10</button>
        <button className="square">11</button>
        <button className="square">12</button>
      </div>
      <div className="board-row">
        <button className="square">13</button>
        <button className="square">14</button>
        <button className="square">15</button>
        <button className="square">16</button>
        <button className="square">17</button>
        <button className="square">18</button>
      </div>
      <div className="board-row">
        <button className="square">19</button>
        <button className="square">20</button>
        <button className="square">21</button>
        <button className="square">22</button>
        <button className="square">23</button>
        <button className="square">24</button>
      </div>
      <div className="board-row"> 
        <button className="square">25</button>
        <button className="square">26</button>
        <button className="square">27</button>
        <button className="square">25</button>
        <button className="square">26</button>
        <button className="square">27</button>
      </div>
      <div className="board-row">
        <button className="square">28</button>
        <button className="square">29</button>
        <button className="square">30</button>
        <button className="square">31</button>
        <button className="square">32</button>
        <button className="square">33</button>
      </div>
      </p>
    </>
  )
}

export default Game
