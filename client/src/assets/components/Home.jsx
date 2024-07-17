// possibly comment out importing react and useEffect
import React, { useState, useEffect } from 'react';
import Nav from './NavSideBar'
import Results from './Results'
import { QUERY_GAMES } from '../../utils/queries';

function Home() {

//    function to fetch game details
    const [searchQuery , setSearchQuery] = useState('');

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        const details = await fetchGameDetails(searchQuery);
        console.log(details);
    };
    

    useEffect(() => {
        const fetchDetails = async () => {
            const details = await fetchGameDetails();
            console.log(details);
        };
        fetchDetails();
    }, []);


    const games = [
        { name: "Game 1", image: "image1.jpg", description: "This is a description of game 1." },
        { name: "Game 2", image: "image2.jpg", description: "This is a description of game 2." },
        { name: "Game 3", image: "image3.jpg", description: "This is a description of game 3." },
        { name: "Game 4", image: "image4.jpg", description: "This is a description of game 4." },
        { name: "Game 5", image: "image5.jpg", description: "This is a description of game 5." },
        { name: "Game 6", image: "image6.jpg", description: "This is a description of game 6." },
        { name: "Game 7", image: "image7.jpg", description: "This is a description of game 7." },
        { name: "Game 8", image: "image8.jpg", description: "This is a description of game 8." },
        { name: "Game 9", image: "image9.jpg", description: "This is a description of game 9." },
        { name: "Game 10", image: "image10.jpg", description: "This is a description of game 10." },
        { name: "Game 11", image: "image11.jpg", description: "This is a description of game 11." },
        { name: "Game 12", image: "image12.jpg", description: "This is a description of game 12." },
        { name: "Game 13", image: "image13.jpg", description: "This is a description of game 13." },
        { name: "Game 14", image: "image14.jpg", description: "This is a description of game 14." },
        { name: "Game 15", image: "image15.jpg", description: "This is a description of game 15." },
        { name: "Game 16", image: "image16.jpg", description: "This is a description of game 16." }
      ];

      const navIndex = {
        zIndex:1
    }
    const resultsIndex = {
        zIndex:0
    }
      
    return (

        <>
        {/* moved the search bar to the homepage */}
           <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSearchSubmit}>
                        <input 
                        id="q" 
                        name="q" 
                        className="inline w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" 
                        placeholder="Keyword" 
                        type="search" 
                        autoFocus="" 
                        value={searchQuery} 
                        onChange={(e)=> setSearchQuery(e.target.value)} 
                        />
                        <button type="submit" className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 md:font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Search
                        </button>
                    </form>
            {/* <Header class="z-20"/> */}
            <Nav style={navIndex}/>

            <Results games={games} style={resultsIndex}/>

        {/* <div>Top Games</div>
        <div>sidebar for signedin users:wishlist/favorites</div>
        <div>Buy Me Coffee Sidebar</div> */}
        </>
    )
}

export default Home;