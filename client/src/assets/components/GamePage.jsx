import React from 'react';
import { useLocation } from 'react-router-dom';

function GamePage() {
  const location = useLocation();
  const gameDetails = location.state?.gameDetails;
  console.log(gameDetails)

  if (!gameDetails) {
    return <div>Loading...</div>; // Or handle the case when gameDetails is not passed
  }

  return (
    <div className="card animate__animated animate__fadeInUp">
      <img src={gameDetails.img} alt="Project Cover" className="card-image" /> {/* not showing the image currently */}
      <div className="card-content">
        <h2 className="card-title animate__animated animate__fadeInDown">{gameDetails.name}</h2>
        <p className="card-description animate__animated animate__fadeIn">{gameDetails.description}</p>
        <div className="card-languages animate__animated animate__fadeIn">
          <span className="language-tag html-tag"><i className="fa-sharp-duotone fa-solid fa-fire"></i>Favorite</span>
          <span className="language-tag css-tag"><i className="fa-sharp-duotone fa-solid fa-bookmark"></i>Wishlist</span>
          <span className="language-tag js-tag"><i className="fa-sharp-duotone fa-solid fa-coins"></i> STEAM price {gameDetails.price}</span>
        </div>
      </div>
    </div>
  );
}
export default GamePage;