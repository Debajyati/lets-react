import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let playerName = <span className="player-name">{name}</span>;

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    if (isEditing) {
      onChangeName(symbol,playerName);
    }
    setIsEditing(editing => !editing);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? playerName : <input type="text" required value={name} onChange={handleChange}/>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
