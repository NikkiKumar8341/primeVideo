import React from 'react'
import { unavailable } from "../utils/constant";
import { useDispatch } from 'react-redux';
import {clearCart} from "../utils/cartSlice";

const FavoriteCard = (props) => {
    const {items}=props

    const dispatch=useDispatch();

    const handleClearCart=()=>{

      dispatch(clearCart());
    }

    // const removeDuplicates = (arr, prop) => {
    //   const seen = new Set();
    //   return arr.filter(item => {
    //     const value = item[prop];
    //     if (seen.has(value)) {
    //       return false;
    //     }
    //     seen.add(value);
    //     return true;
    //   });
    // };
    
    // // Usage: Remove duplicates based on 'id' property
    // const uniqueData = removeDuplicates(items, items.id);

    // console.log(uniqueData,"uniquedata");
    
  return (
    <div >
      <div className='row my-2'>
      <div className='col d-flex justify-content-md-center'>

        <button className='btn btn-dark text' onClick={handleClearCart}>clear</button>

      </div>
      </div>
      <div className='row'>
        {
          items.length >0 &&(

            items.map((item)=>{
              return(
                <div className='col my-2' key={item.id}>
                  <img className='mx-2' src={
                    item.poster_path ? 
                    `https://image.tmdb.org/t/p/w300${item.poster_path}` :`${unavailable}`}
                  alt={`${item.title} Poster`}
                  />
                </div>
              )
            })    
          )
         
        }
        </div>
    </div>
  )
}

export default FavoriteCard