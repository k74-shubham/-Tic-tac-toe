import React, { useState } from "react";

export const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  }

  const handleEditClick = () => {
    // setIsEditing(!isEditing);  => schedules a state update to true
    // setIsEditing(!isEditing);  => schedules a state update to true
    // bcz in both the isEditing is false and in same cycle
    setIsEditing((editing) => !editing);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
