import React from 'react';

function GamePage() {


    
    return (

            <div class="card animate__animated animate__fadeInUp">
                <img src="https://picsum.photos/350/200" alt="Project Cover" class="card-image" />
                <div class="card-content">
                    <h2 class="card-title animate__animated animate__fadeInDown">Awesome Project</h2>
                    <p class="card-description animate__animated animate__fadeIn">Experience cutting-edge technology and stunning design in this revolutionary project. Prepare to be amazed!</p>
                    <div class="card-languages animate__animated animate__fadeIn">
                        <span class="language-tag css-tag"><i class="fab fa-css3-alt"></i> Steam Price: </span>
                    </div>
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs lg:text-4xl lg:pr-5 font-bold rounded-l">
                    Favorite
                  </button>
                  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs lg:text-4xl lg:pl-5 font-bold rounded-r">
                    Wishlist
                  </button>
                </div>
            </div>
            
    )
}

export default GamePage;