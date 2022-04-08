import React, { useEffect, useState } from 'react';
import './MovieCard.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constants';
import BeatLoader from "react-spinners/BeatLoader";

function MovieCard() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results[Math.floor(Math.random() * 21)]);

      setMovie(response.data.results[Math.floor(Math.random() * 19)])
    })
  }, [])
  return (
    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${movie ? imageUrl + movie.backdrop_path : ''})`, backgroundSize: "cover" }} className='col-md-3 movie-card '>
      {movie ?
        <h1 className='text-white'>Trending Movies </h1>
        :
        <BeatLoader color={"#EEEEEE"} loading={movie} size={17} />
      }
    </div>
  )
}

export default MovieCard
