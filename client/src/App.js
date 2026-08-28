import React, { useState, useEffect } from 'react';
import './App.css';
import GameEditor from './components/GameEditor';
import GamePlayer from './components/GamePlayer';

function App() {
  const [gameMode, setGameMode] = useState('menu'); // menu, editor, player

  return (
    <div className="App">
      <header className="app-header">
        <h1>Roblox Clone</h1>
        <nav>
          <button onClick={() => setGameMode('menu')}>Home</button>
          <button onClick={() => setGameMode('editor')}>Create</button>
          <button onClick={() => setGameMode('player')}>Play</button>
        </nav>
      </header>

      <main className="app-main">
        {gameMode === 'menu' && (
          <div className="menu">
            <h2>Welcome to Roblox Clone</h2>
            <p>Create and play multiplayer 3D games</p>
            <button onClick={() => setGameMode('editor')}>Start Creating</button>
            <button onClick={() => setGameMode('player')}>Play Games</button>
          </div>
        )}
        {gameMode === 'editor' && <GameEditor />}
        {gameMode === 'player' && <GamePlayer />}
      </main>
    </div>
  );
}

export default App;
