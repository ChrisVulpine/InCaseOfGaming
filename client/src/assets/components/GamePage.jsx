import React from 'react';
import Nav from './NavSideBar'

function GamePage() {
  return (
    <div class="card animate__animated animate__fadeInUp">
      <img src="https://picsum.photos/350/200" alt="Project Cover" class="card-image" />
      <div class="card-content">
        <h2 class="card-title animate__animated animate__fadeInDown">Awesome Project</h2>
        <p class="card-description animate__animated animate__fadeIn">Experience cutting-edge technology and stunning design in this rewwwwwww wwwwwwwww wwwwwwwwwfdsasfdsfsdf sdf sd fds fdsfsdfsd fdsfdsfdsfds fdsfdsfdsfsfww wwwwwww wwwwwww wwwwwwwwww wwww wwww wwwww www wwwww wwww wwww wwww wwwww www wwwvo lutionary project. Prepare to be amazed!</p>
        <div class="card-languages animate__animated animate__fadeIn">
          <span class="language-tag html-tag"><i class="fa-sharp-duotone fa-solid fa-fire"></i>Favorite</span>
          <span class="language-tag css-tag"><i class="fa-sharp-duotone fa-solid fa-bookmark"></i>Wishlist</span> {/*also these icons to decide: <i class="fa-sharp-duotone fa-solid fa-moon-stars"></i> or <i class="fa-sharp-duotone fa-solid fa-stars"></i>*/}
          <span class="language-tag js-tag"><i class="fa-sharp-duotone fa-solid fa-coins"></i> STEAM price</span>
        </div>
      </div>
    </div>
  );
};

export default GamePage;