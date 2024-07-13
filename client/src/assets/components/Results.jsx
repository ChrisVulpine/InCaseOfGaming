import React, { useEffect, useState } from 'react';

function Results(props) {
  //const for array of 16 games with names, images, and descriptions



    //"infinite" scroll
    // const [count, setCount] = useState(5);
    // const [isFetching, setIsFetching] = useState(false); // maybe use for fetching/loading purposes
    const newCards = [];

    // for (let i = 0; i < count; i++) {
      props.games.forEach((game, index) => 
        newCards.push(
            <article class="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black  transform duration-500 hover:-translate-y-12   group">
                <div class="bg-black relative h-full group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                     <div class=" bg-black p-8 h-full justify-end flex flex-col">
                        <fig key={index}>
                        <h1 class="text-white mt-2 text-xl mb-5 transform  translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400"> {game.name} </h1>
                        <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 "> {game.description} </p>
                      </fig>
                    </div>
                </div>
            </article>
        )
      )
      
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
    <div>

<section class="bg-white">
    <div class="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center ">
  {/* <!-- Starts component --> */}
        <div class="grid grid-cols-1 gap-2 content-center mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-5xl mx-auto" role="list"> {/* change grid-cols-n to change overflow */}
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
</section>    
</div>
  );
}

export default Results;