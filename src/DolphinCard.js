import React from 'react';

const DolphinCard = ({ dolphin, liked, onLike, onDislike }) => {
  const handleLike = () => {
    onLike(dolphin);
  };

  const handleDislike = () => {
    onDislike(dolphin);
  };

  return (
    <div className="card">
      <div className="card-content">
        <img src={dolphin.image} alt={dolphin.name} />
        <h2>{dolphin.name}</h2>
        <p>Age: {dolphin.age}</p>
        <p>Gender: {dolphin.gender}</p>
        <p>Location: {dolphin.location}</p>
        <p>Interests: {dolphin.interests.join(', ')}</p>
        <p>Description: {dolphin.description}</p>
      </div>
      <div className="buttons">
        {!liked && (
          <button className="like-button" onClick={handleLike}>
            Like
          </button>
        )}
        <button className="dislike-button" onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default DolphinCard;
