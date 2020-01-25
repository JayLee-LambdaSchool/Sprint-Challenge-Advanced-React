import React from 'react';
import PlayersCard from '../Components/PlayersCard';

function PlayersList({players}) {
  return (
    <section>
      {players.map(player => (
        <PlayersCard
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}
    </section>
  );
};

export default PlayersList;