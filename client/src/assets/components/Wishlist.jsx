import React from 'react';
import { QUERY_WISHLIST } from '../../utils/queries';


function Wishlist() {

    const { loading, error, data } = useQuery(QUERY_WISHLIST);
    
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return (
        <div>
            <h1>
            
            </h1>
        </div>
    );
}

export default Wishlist;