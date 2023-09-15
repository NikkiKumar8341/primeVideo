import React,{useState,useEffect} from 'react'

const useCastCrewTv = (id) => {
    const [cast_crew,setcastCrew]=useState([])

    const cast_crew_endpoints=`https://api.themoviedb.org/3/tv/${id}/credits?api_key=4fe592a41ab3d02679639aa510ee521e`


    useEffect(()=>{
        cast_crew_fetch()
        
    },[])

    const cast_crew_fetch=async()=>{
        const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                }
        };

        const data=await fetch(cast_crew_endpoints,options)

        const results=await data.json();

        setcastCrew(results)

    }
  return cast_crew;
}

export default useCastCrewTv