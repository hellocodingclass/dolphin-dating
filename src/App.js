import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DolphinCard from './DolphinCard';
import LikedDolphins from './LikedDolphins';
import Matchmaking from './Matchmaking';
import UserForm from './UserForm';
import './styles.css';

function App() {
  const [dolphins, setDolphins] = useState([]);
  const [likedDolphins, setLikedDolphins] = useState([]);
  const [currentDolphinIndex, setCurrentDolphinIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/dolphins')
      .then((response) => response.json())
      .then((data) => setDolphins(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFormSubmit = (data) => {
    setFormData(data);
    // Here you would perform the matching algorithm
  };

  const handleLike = () => {
    setLikedDolphins((prevLikedDolphins) => [...prevLikedDolphins, dolphins[currentDolphinIndex]]);
    nextDolphin();
  };

  const handleDislike = () => {
    nextDolphin();
  };

  const nextDolphin = () => {
    if (currentDolphinIndex + 1 < dolphins.length) {
      setCurrentDolphinIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log('You have seen all the dolphins!');
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDolphins = likedDolphins.filter((dolphin) => {
    const interests = dolphin.interests ? dolphin.interests.map((interest) => interest.toLowerCase()) : [];
    return interests.includes(searchTerm.toLowerCase());
  });

  function calculateMatchScore(userFormData, dolphin) {
    let score = 0;
  
    if (userFormData.genderPreference === dolphin.gender) {
      score += 5;
    }

    return score; // Closing the calculateMatchScore function
  }

  useEffect(() => {
    if (formData) {
      const updatedDolphins = dolphins.map((dolphin) => {
        const score = calculateMatchScore(formData, dolphin);
        return { ...dolphin, matchScore: score };
      });
      setDolphins(updatedDolphins);
    }
  }, [formData, dolphins]);

  if (!dolphins || dolphins.length === 0) {
    return <div>Loading...</div>;
  }

  const currentDolphin = dolphins[currentDolphinIndex];

  return (
    <>
      <div className="container">
        <h1>Dolphindr🐬</h1>
        <div className="buttons">
          <Link to="/">Home</Link>
          <Link to="/liked">Liked Dolphins</Link>
          <Link to="/form">Create Profile</Link>
        </div>

        <Routes>
          <Route exact path="/" element= {
            <>
             <div className="card-container">
             {currentDolphin && (
               <DolphinCard
                 dolphin={currentDolphin}
                 liked={likedDolphins.some((dolphin) => dolphin.id === currentDolphin.id)}
                 onLike={handleLike}
                 onDislike={handleDislike}
               />
             )}
           </div>

            <div className="search-container">
              <label>Search Interests:</label>
              <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
            </div>

            {filteredDolphins.length > 0 && <Matchmaking likedDolphins={filteredDolphins} currentDolphin={currentDolphin} />}
            </>
          } />

          <Route path='/liked' element={<LikedDolphins likedDolphins={likedDolphins} />} />
          <Route path="/form" element={<UserForm onSubmit={handleFormSubmit} />} />
        </Routes>
  
      </div>

    </>
  );
}

export default App;
