import React from 'react';
import './styles.css'; // Import the styles

const Matchmaking = ({ likedDolphins, currentDolphin }) => {
  return (
    <div className="matchmaking">
      <h2>Potential Matches</h2>
      <ul>
        {likedDolphins.map((dolphin) => (
          <li key={dolphin.id}>{dolphin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Matchmaking;
