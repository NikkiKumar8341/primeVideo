import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {


  //subscribing to the store using a selector
  const cartItems=useSelector((store)=>store.favoriteCart.items);


  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/home">MovieMasti</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to='/favourite'>favourite - ({cartItems.length} movies)</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-primary">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
