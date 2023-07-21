import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DolphinCard from './DolphinCard';
import LikedDolphins from './LikedDolphins';
import Matchmaking from './Matchmaking';
import './styles.css';

function App() {
  const [dolphins, setDolphins] = useState([]);
  const [likedDolphins, setLikedDolphins] = useState([]);
  const [currentDolphinIndex, setCurrentDolphinIndex] = useState(0);
  const [showLikedDolphins, setShowLikedDolphins] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/dolphins')
      .then((response) => response.json())
      .then((data) => setDolphins(data))
      .catch((error) => console.error(error));
  }, []);

  const handleLike = (dolphin) => {
    setLikedDolphins((prevLikedDolphins) => [...prevLikedDolphins, dolphin]);
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

  const handleShowLikedDolphins = () => {
    setShowLikedDolphins(!showLikedDolphins);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDolphins = likedDolphins.filter((dolphin) => {
    const interests = dolphin.interests.map((interest) => interest.toLowerCase());
    return interests.includes(searchTerm.toLowerCase());
  });

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

            {/* {showLikedDolphins && likedDolphins.length > 0 && <LikedDolphins likedDolphins={likedDolphins} />} */}
            {filteredDolphins.length > 0 && <Matchmaking likedDolphins={filteredDolphins} currentDolphin={currentDolphin} />}
            </>
          } />
                
          <Route path='/liked' element={<LikedDolphins likedDolphins={likedDolphins} />} />
            {/* <LikedDolphins likedDolphins={likedDolphins} /> */}
          </Routes>
  
      </div>

    </>
  );
}

export default App;
