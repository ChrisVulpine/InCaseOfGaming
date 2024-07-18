import React, {useState } from 'react';
import Nav from './NavSideBar'
import Results from './Results'

import { QUERY_LIKED_GAMES } from '../../utils/queries';


function LikedGames() {
    //use query to retrieve liked games on page load
    // const favoriteGames = ({onLoad}) => {
    //     const { loading, error, data } = useQuery(QUERY_LIKED_GAMES);
    //     if (loading) return 'Loading...';
    //     if (error) return `Error! ${error.message}`;
    //     return data;
    // }

   

    

    // const { loading, error, data } = useQuery(QUERY_LIKED_GAMES);
    
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    const navIndex = {
        zIndex:1
    }
    const resultsIndex = {
        zIndex:0
    }
      
    return (

        <>
        <div class="absolute ">
            {/* <Header class="z-20"/> */}
            <Nav style={navIndex}/>

            <Results games={likedGames} style={resultsIndex}/>
            </div>

        {/* <div>Top Games</div>
        <div>sidebar for signedin users:wishlist/favorites</div>
        <div>Buy Me Coffee Sidebar</div> */}

        </>
    )
}

export default LikedGames;