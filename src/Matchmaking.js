import React from 'react';
import './styles.css';

const Matchmaking = ({ likedDolphins, currentDolphin }) => {
  return (
    <div className="matchmaking">
      <h2>Potential Matches for {currentDolphin.name}</h2>
      <ul>
        {likedDolphins.map((dolphin) => (
          <li key={dolphin.id}>{dolphin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Matchmaking;
