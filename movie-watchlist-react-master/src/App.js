import React from "react";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import { Header } from "./components/Header";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalProvider} from "./context/GlobalState";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import PlayNow from "./components/PlayNow";
import Cast_Crew_Details from "./components/Cast_Crew_Details";
import TvshowDetails from "./components/TvshowDetails";
import StreamProvider from "./components/StreamProvider";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Favorite from "./components/Favorite";


function App() {
  return (
    <>

    <Provider  store={appStore}>
    <GlobalProvider>

   
      <BrowserRouter>
        <Header />
<div className="conatiner">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/watchlist'  element={<Watchlist/>}/>
          <Route path='/details/movie/:mediaId'  element={<MovieDetail/>}/>
          <Route path='/details/tv/:tvShowId' element={<TvshowDetails/>} />
          <Route path='/watched' element={<Watched/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/play' element={<PlayNow/>}/>
          <Route path='/favourite' element={<Favorite/>}/>
          <Route path="/cast&CrewDetails/:id"  element={<Cast_Crew_Details/>}/>
          <Route path='/streamer' element={<StreamProvider/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </GlobalProvider>
      </Provider>
    </>
  );
}

export default App;
