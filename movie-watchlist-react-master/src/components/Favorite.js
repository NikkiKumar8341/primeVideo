import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';
import FavoriteCard from './FavoriteCard';
import PlayNow from './PlayNow';

const Favorite = () => {

    const favoriteMovies=useSelector((store)=>store.favoriteCart.items);

  return (
    <div>

        <FavoriteCard  items={favoriteMovies}/>
        {/* {favoriteMovies.map((item)=>{
            return(
                <>
                <h1>{item.title}</h1>
                </>
            )
        })} */}
        
    </div>
  )
}

export default Favorite