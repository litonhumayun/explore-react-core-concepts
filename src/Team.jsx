import { useState } from "react";

export default function Team() {
  const [players, setPlayers] = useState(11);

  const handleAddPlayer = () => {
    const newPlayers = players + 1;
    setPlayers(newPlayers);
  };

  const handleRemovePlayer = () => {
    const newPlayers = players - 1;
    setPlayers(newPlayers);
  };

  const teamStyle = {
    border: "2px solid brown",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {players}</h3>
      <button onClick={handleAddPlayer}>Add</button>
      <button onClick={handleRemovePlayer}>Remove</button>
    </div>
  );
}
