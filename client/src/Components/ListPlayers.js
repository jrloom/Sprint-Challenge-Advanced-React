import React from "react";
import Player from "./Player";

const ListPlayers = ({ players }) => {
  return (
    <div>
      {players.map(player => (
        <Player country={player.country} key={player.id} name={player.name} searches={player.searches} />
      ))}
    </div>
  );
};

export default ListPlayers;
