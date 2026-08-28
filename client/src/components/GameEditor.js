import React, { useState } from 'react';
import './GameEditor.css';

function GameEditor() {
  const [gameName, setGameName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateGame = () => {
    if (gameName.trim()) {
      alert(`Game "${gameName}" created!`);
      setGameName('');
      setDescription('');
    }
  };

  return (
    <div className="game-editor">
      <h2>Game Editor</h2>
      <div className="editor-container">
        <div className="properties-panel">
          <h3>Game Properties</h3>
          <div className="form-group">
            <label>Game Name</label>
            <input
              type="text"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
              placeholder="Enter game name"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter game description"
            />
          </div>
          <button onClick={handleCreateGame} className="btn-primary">Create Game</button>
        </div>
        <div className="canvas-area">
          <p>3D Canvas Area</p>
          <p>(Three.js/Babylon.js will render here)</p>
        </div>
      </div>
    </div>
  );
}

export default GameEditor;
