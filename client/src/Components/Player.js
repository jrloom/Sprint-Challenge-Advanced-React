import React from "react";

const Player = ({ country, name, searches }) => {
  return (
    <section>
      <h2 data-testid={name}>{name}</h2>
      <p data-testid={country}>{country}</p>
      <p data-testid={searches}>{searches}</p>
    </section>
  );
};

export default Player;
