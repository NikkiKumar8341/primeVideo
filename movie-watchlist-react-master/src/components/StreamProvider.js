import React from 'react'
import { useLocation } from 'react-router-dom'
import useWatchProvider from '../utils/useWatchProvider';

const StreamProvider = () => {

  const location=useLocation();

  const mediaId=location.state;

  console.log(mediaId,"media");

  const stream=useWatchProvider(mediaId);

  console.log(stream);



  return (
    <div>StreamProvider</div>
  )
}

export default StreamProvider