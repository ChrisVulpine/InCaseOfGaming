import React from 'react';
import { QUERY_LIKED_GAMES } from '../../utils/queries';


function LikedGames() {

    const { loading, error, data } = useQuery(QUERY_LIKED_GAMES);
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <h1>Liked Games</h1>
        </div>
    );
}

export default LikedGames;