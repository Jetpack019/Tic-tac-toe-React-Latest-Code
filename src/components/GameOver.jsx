import React from 'react'

function GameOver({winner}) {
  return (
    <div id="game-over">
        <h2>Game Over!</h2>
        <p>{winner} won!</p>
        <p>
            <button>Rematch!</button>
        </p>
    </div>
  )
}

export default GameOver