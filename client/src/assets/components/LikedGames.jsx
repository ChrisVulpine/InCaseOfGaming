import React, {useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import Nav from './NavSideBar'
import Results from './Results'

import { QUERY_USER  } from '../../utils/queries';


function LikedGames() {
    const [likedGames, setLikedGames] = useState([]); // Step 1: Initialize state for likedGames

    const userId = localStorage.getItem('userId'); // Simplified getting userId

    // Moved outside of try-catch because useQuery is a hook and must be used at the top level
    const { loading, error, data } = useQuery(QUERY_USER, {
        variables: { userId },
    });

    useEffect(() => { // Step 3: Use useEffect to update likedGames once data is fetched
        if (data && data.user) { // Assuming the data returned has a user field with likedGames
            setLikedGames(data.user.likedGames);
            console.log(data);
        }
        console.log(data);
    }, [data]);

    if (!userId) {
        alert('Please log in to add games to your favorites!');
        return null; // Return null to render nothing
    }

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    // Initialize state at the top level
    // const [userData, setUserData] = useState({});

    // // Use useEffect to update state after data is fetched
    // useEffect(() => {
    //     if (data) {
    //         setUserData(data);
    //     }
    // }, [data]);

    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

    // const likedGames = userData.likedGames || [];
    // console.log(likedGames);
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