import React, { useState, useEffect } from 'react';
import './GamePlayer.css';

function GamePlayer() {
  const [games, setGames] = useState([
    { id: 1, name: 'Obby Game', players: 1024 },
    { id: 2, name: 'Tycoon Sim', players: 2341 },
    { id: 3, name: 'Survival Mode', players: 856 }
  ]);

  const handlePlayGame = (gameName) => {
    alert(`Loading game: ${gameName}...`);
  };

  return (
    <div className="game-player">
      <h2>Games</h2>
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-thumbnail"></div>
            <h3>{game.name}</h3>
            <p>{game.players} players</p>
            <button onClick={() => handlePlayGame(game.name)}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamePlayer;
