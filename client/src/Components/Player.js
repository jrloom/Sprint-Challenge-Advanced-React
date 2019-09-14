import React from "react";

const Player = ({ country, name, searches }) => {
  return (
    <section>
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{searches}</p>
    </section>
  );
};

export default Player;

// name
// country
// seaches
