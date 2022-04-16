import React, { useState, useEffect } from 'react';
import './MovieList.css';
import { API_KEY, imageUrl } from '../../Constants/constants';
import axios from '../../axios';


function MovieList() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results)
    })
  }, [])
  return (
    <div>
      <div className='movie-list-title'>
        <h2 className='title-text' >MovieList</h2>
      </div>
      <section>
        <div className='movie-container p-4'>
          <div className='row'>
           {
             movies.map((obj)=>{
               return(
                 <div className='col-md-3 p-2 movie-image-box'>
                   <img className='movie-image' src={imageUrl + obj.backdrop_path}></img>
                 </div>
               )
             })
           }
          </div>
        </div>
      </section>
    </div>
  )
}

export default MovieList