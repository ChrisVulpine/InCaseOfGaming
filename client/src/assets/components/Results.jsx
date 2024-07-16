import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LIKED_GAMES, ADD_WISHLIST } from '../../utils/mutations';

function Results(props) {
  //const for array of 16 games with names, images, and descriptions


//========================================================================
// Functions to add to favorites and wishlist using mutations -cdl
//========================================================================

  // Variables of mutations imported above
  const [addLikedGames] = useMutation(ADD_LIKED_GAMES);
  const [addWishlist] = useMutation(ADD_WISHLIST);

  // Add to Favorites Function
  const handleFavoriteClick = async (gameId) => {
    const userId = localStorage.getItem('userId');

    if(!userId) {
      alert('Please log in to add games to your favorites!');
      return;
    }

    try {
      const { data } = await addLikedGames({
        variables: { userId, gameIds: [gameId] }, 
      });

      console.log('Game added to favorites:', data);

    } catch (error) {
      console.error('Error adding game to favorites:', error);
    }
  };

   // Add to Wishlist Function
  const handleAddToWishlist = async (gameId) => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      alert('You must be logged in to add a game to your wishlist');
      return;
    }

    try {
      const { data } = await addWishlist({
        variables: { userId, gameIds: [gameId] },
      });
      console.log('Game added to wishlist:', data);
    } catch (error) {
      console.error('Error adding game to wishlist:', error);
    }
  };

//========================================================================


    //"infinite" scroll
    // const [count, setCount] = useState(5);
    // const [isFetching, setIsFetching] = useState(false); // maybe use for fetching/loading purposes


    const newCards = [];

 

    props.games.map((game, index) => {
      newCards.push(
        <article key={index} class="mx-0.5 md:mx-.5 shadow-xl bg-cover bg-center max-h-50 lg:max-h-150 relative border-8 border-black  transform duration-500 hover:-translate-y-12 group">
          <div style={{ zIndex: index, backgroundImage: `url(${game.image})` }} class="bg-white relative h-full group-hover:bg-opacity-0 lg:min-h-150  flex flex-wrap flex-col pt-[5rem] sm:pt-[10rem] hover:bg-opacity-75 transform duration-300">
            <div class=" bg-black   p-.5 h-full justify-end flex flex-col">
              <h1 class="text-white mt-2 text-xs md:text-xl mb-5 transform  translate-y-10 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400"> {game.name} </h1>
              <p class="opacity-0 text-white text-xs md:text-xl group-hover:opacity-80 transform duration-500 "> {game.description} </p>
                <div class="glex-wrap">
                  <button  onClick={() => handleFavoriteClick(game._id)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs font-bold rounded-l">
                    Favorite
                  </button>
                  <button  onClick={() => handleAddToWishlist(game._id)} class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-xs font-bold rounded-r">
                    Wishlist
                  </button>
                </div>
            </div>
          </div>
        </article>,
      );
    });


      
      //can use if we want more results to populate upon scrolling
      // useEffect(() => {
      //   const onScrollEnd = () => {
      //     if (
      //       window.innerHeight + window.scrollY >=
      //       window.document.body.offsetHeight - 60 //more things will populate when user gets less than 60px from the bottom of the page
      //     ) {
      //       //your operation goes here to add data
      //       // setCount((prev) => prev + 5); //add more cards
      //     }
      //   };
    
      //   window.addEventListener("scroll", onScrollEnd);
    
      //   //clean up
      //   return () => window.removeEventListener("scroll", onScrollEnd);
      // });

  return (

    <div className="bg-white ml-20 md:ml-48 lg:ml-52 xl:ml-42 max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 lg:px-0 mx-auto mb-12 lg:mb-24 space-y-12 flex flex-col justify-center lg:justify-left">
  {/* <!-- Starts component --> */}
        <div className="grid grid-cols-3  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:gap-2 content-center mt-12 list-none max-w-5xl xl:max-w-none mx-auto lg:mx-0 lg:ml-20" role="list"> {/* change grid-cols-n to change overflow */}
        {/* <!---
                    // Loop through the features array to render each feature dynamically.
                    //
                    // Apply dynamic background color using the bgColor property from the feature object. Also, make the background slightly transparent on hover to
                    // reveal the background image more clearly.
                    //
                    // The title's color changes on hover, using the titleColor property from the feature object. This demonstrates how to dynamically apply Tailwind
                    // CSS classes based on component state or properties.
                    //
                    //  {String(index + 1).padStart(2, "0") + "⏤"} Converts the current index (from iterating over the features array) to a string and adds 1 to it,
                    // and adds a dash at the end of the number */}
                    {/* --> */}
                    {newCards}
        </div>
    </div>
  );
}

export default Results;