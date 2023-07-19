import React from 'react';
import './styles.css'; // Import the styles

const LikedDolphins = ({ likedDolphins }) => {
  return (
    <div className="liked-dolphins">
      <h2>Liked Dolphins</h2>
      <ul>
        {likedDolphins.map((dolphin) => (
          <li key={dolphin.id}>{dolphin.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LikedDolphins;
