import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    image: '',
    matchScore: '',
    description: '',
    gender: '',
    genderPreference: '',
    favoriteActivities: '',
    greatestAchievement: '',
    covidVaccinationStatus: '',
    favoriteFood: '',
    bodyMeasurements: {
      length: '',
    },
    groupAffiliation: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleInputChange} />

      <label>Age:</label>
      <input type="number" name="age" onChange={handleInputChange} />

      <label>Location:</label>
      <input type="text" name="location" onChange={handleInputChange} />

      <label>Image URL:</label>
      <input type="text" name="image" onChange={handleInputChange} />

      <label>Match Score:</label>
      <input type="number" name="matchScore" onChange={handleInputChange} />

      <label>Description:</label>
      <input type="text" name="description" onChange={handleInputChange} />

      <label>Gender:</label>
      <input type="text" name="gender" onChange={handleInputChange} />

      <label>Gender Preference:</label>
      <input type="text" name="genderPreference" onChange={handleInputChange} />

      <label>Favorite Activities:</label>
      <input type="text" name="favoriteActivities" onChange={handleInputChange} />

      <label>Greatest Achievement:</label>
      <input type="text" name="greatestAchievement" onChange={handleInputChange} />

      <label>Covid Vaccination Status:</label>
      <input type="text" name="covidVaccinationStatus" onChange={handleInputChange} />

      <label>Favorite Food:</label>
      <input type="text" name="favoriteFood" onChange={handleInputChange} />

      <label>Length:</label>
      <input type="number" name="length" onChange={handleInputChange} />

      <label>Group Affiliation:</label>
      <input type="text" name="groupAffiliation" onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
