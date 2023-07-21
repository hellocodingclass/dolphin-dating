import React from 'react';

const DolphinCard = ({ dolphin, liked, onLike, onDislike }) => {
  const handleLike = () => {
    onLike(dolphin);
  };

  const handleDislike = () => {
    onDislike();
  };

  return (
    <div className="card">
      <div className="card">
      <h2>{dolphin.name}</h2>
      <p>{dolphin.age} years old in {dolphin.location}</p>
      <img src={dolphin.image} alt={dolphin.name} />
      <div className="buttons">
        <button className="dislike-button" onClick={handleDislike}>
        e e e e e
        </button>
        {!liked && (
          <button className="like-button" onClick={handleLike}>
            eeeeeeeee!
          </button>
        )}
      </div>
      <p>Match Score: {dolphin.matchScore}</p>
      <p> {dolphin.description}</p>
      <p>{dolphin.gender} seeking {dolphin.genderPreference}</p>
      <p>Favorite Activities: {dolphin.favoriteActivities.join(', ')}</p>
      <p>Greatest Achievement: {dolphin.greatestAchievement}</p>
      <p>Covid Vaccination Status: {dolphin.covidVaccinationStatus}</p>
      <p>Favorite Food: {dolphin.favoriteFood}</p>
      <p>Length: {dolphin.bodyMeasurements.length}</p>
      <p>Group Affiliation: {dolphin.groupAffiliation}</p>
    </div>
      
    </div>
  );
};

export default DolphinCard;
