import React from 'react';
import PlayersCard from '../Components/PlayersCard';

function PlayersList({players}) {
  return (
    <section>
      <div>
      {players.map(player => (
        <PlayersCard
          key={player.id}
          name={player.name}
          country={player.country}
          searches={player.searches}
        />
      ))}     
      </div>
       
    </section>
  );
};

export default PlayersList;