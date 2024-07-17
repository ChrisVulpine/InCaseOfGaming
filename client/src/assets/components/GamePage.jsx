import React from 'react';
import Nav from './NavSideBar'

function GamePage() {


  // const game = {



  return (
    <div class="card animate__animated animate__fadeInUp">
      <div style={{ backgroundImage: `url(${game.image})` }} class="bg-FBBF24 relative h-full group-hover:bg-opacity-0 lg:min-h-150 rounded-sm flex flex-wrap flex-col pt-[5rem] sm:pt-[10rem] hover:bg-opacity-75 transform duration-300">
      </div>
      <div class="card-content">
        <h2 class="card-title animate__animated animate__fadeInDown">{game.name}</h2>
        <p class="card-description animate__animated animate__fadeIn">{game.description}</p>
        <div class="card-languages animate__animated animate__fadeIn">
          <span class="language-tag html-tag"><i class="fa-sharp-duotone fa-solid fa-fire"></i>Favorite</span>
          <span class="language-tag css-tag"><i class="fa-sharp-duotone fa-solid fa-bookmark"></i>Wishlist</span> {/*also these icons to decide: <i class="fa-sharp-duotone fa-solid fa-moon-stars"></i> or <i class="fa-sharp-duotone fa-solid fa-stars"></i>*/}
          <span class="language-tag js-tag"><i class="fa-sharp-duotone fa-solid fa-coins"></i> STEAM price {game.price}</span>
        </div>
      </div>
    </div>
  );
};

export default GamePage;