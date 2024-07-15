import React, { useEffect, useState } from 'react';

function Results(props) {
  //const for array of 16 games with names, images, and descriptions



    //"infinite" scroll
    // const [count, setCount] = useState(5);
    // const [isFetching, setIsFetching] = useState(false); // maybe use for fetching/loading purposes
    const newCards = [];

    

    props.games.map((game, index) => {
      newCards.push(
        <article class="mx-0.5 md:mx-.5 shadow-xl bg-cover bg-center max-h-50 lg:max-h-150 relative border-8 border-black  transform duration-500 hover:-translate-y-12 group">
          <div style={{ zIndex: index, backgroundImage: `url(${game.image})` }} class="bg-black relative h-full group-hover:bg-opacity-0 lg:min-h-150  flex flex-wrap flex-col pt-[5rem] sm:pt-[10rem] hover:bg-opacity-75 transform duration-300">
            <div class=" bg-white   p-.5 h-full justify-end flex flex-col">
              <h1 class="text-white mt-2 text-xs md:text-xl mb-5 transform  translate-y-10 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400"> {game.name} </h1>
              <p class="opacity-0 text-white text-xs md:text-xl group-hover:opacity-80 transform duration-500 "> {game.description} </p>
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

    <div class="bg-white ml-20 md:ml-48 lg:ml-52 xl:ml-42 max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 lg:px-0 mx-auto mb-12 lg:mb-24 space-y-12 flex flex-col justify-center lg:justify-left">
  {/* <!-- Starts component --> */}
        <div class="grid grid-cols-3  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:gap-2 content-center mt-12 list-none max-w-5xl xl:max-w-none mx-auto lg:mx-0 lg:ml-20" role="list"> {/* change grid-cols-n to change overflow */}
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