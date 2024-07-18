import { useState, useEffect } from 'react';
import Nav from './NavSideBar'
import Results from './Results'
import { useQuery } from '@apollo/client';
import { QUERY_WISHLIST } from '../../utils/queries';


function Wishlist({ games, userId }) {
    const [addWishlist, { data, loading, error }] = useMutation(ADD_WISHLIST);

    const handleAddToWishlist=(game) => {
        addWishlist({
            variables: { 
                userId: userId,
                 gameInput: {
                    id: game.id,
                    name: game.name,
                    description: game.description || '',
                    price: game.price,
                    img: game.image,
                    small_cap: game.small_cap || ''
                 }
            }
        });
    };






    // const wantedGames = [
    //     { name: "Game 1", image: "image1.jpg", description: "This is a description of game 1." },
    //     { name: "Game 2", image: "image2.jpg", description: "This is a description of game 2." },
    //     { name: "Game 3", image: "image3.jpg", description: "This is a description of game 3." },
    //     { name: "Game 4", image: "image4.jpg", description: "This is a description of game 4." },
    //     { name: "Game 5", image: "image5.jpg", description: "This is a description of game 5." },
    //     { name: "Game 6", image: "image6.jpg", description: "This is a description of game 6." },
    //     { name: "Game 7", image: "image7.jpg", description: "This is a description of game 7." },
    //     { name: "Game 8", image: "image8.jpg", description: "This is a description of game 8." },
    //     { name: "Game 9", image: "image9.jpg", description: "This is a description of game 9." },
    //     { name: "Game 10", image: "image10.jpg", description: "This is a description of game 10." },
    //     { name: "Game 11", image: "image11.jpg", description: "This is a description of game 11." },
    //     { name: "Game 12", image: "image12.jpg", description: "This is a description of game 12." },
    //     { name: "Game 13", image: "image13.jpg", description: "This is a description of game 13." },
    //     { name: "Game 14", image: "image14.jpg", description: "This is a description of game 14." },
    //     { name: "Game 15", image: "image15.jpg", description: "This is a description of game 15." },
    //     { name: "Game 16", image: "image16.jpg", description: "This is a description of game 16." }
    //   ];

    // const { loading, error, data } = useQuery(QUERY_WISHLIST);
    
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    const navIndex = {
        zIndex:1
    }
    const resultsIndex = {
        zIndex:0
    }
      
    return (


        <div className="absolute">
            <Nav style={navIndex}/>
            {data.wishlist.games.map((game) => (
                <Results key={game._id} games={game._id} name={game.name} image={game.img} style={resultsIndex}/>
            ))}
            </div>
            )
        }


export default Wishlist;