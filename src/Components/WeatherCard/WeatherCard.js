import React, { useEffect, useState, useContext } from 'react';
import './WeatherCard.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { WEATHER_API_KEY } from '../constants/constants'
import { FirebaseContext } from '../../store/Context';
import BeatLoader from "react-spinners/BeatLoader";
import MovieCard from '../MovieCard/MovieCard';
import Cowin from '../Cowin/Cowin';

function Card() {

    const [weather, setWeather] = useState({ loading: true });
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [location, setLocation] = useState('');

    useEffect(() => {
        firebase.firestore().collection('location').get().then((snapshort) => {
            const location = snapshort.docs.map((location) => {
                return (
                    {
                        ...location.data(),
                        id: location.id
                    }
                )

            })
            // axios.get(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${location[0].city}`).then((response) => {
            //     setWeather(response.data)
            // })
        })
    }, [])
    return (
        <div className='box-padding p-3 pt-4     ml-2 mr-2 row'>
            {/* <h2 className='section-title'>Weather</h2> */}
            <div onClick={() => { navigate('/weatherdetails') }} className=" mb-4 card col-md-3 mr-4" >
                <div className={weather.loading ?"card-body-loading card-body ":"card-body "}>
                    {weather.location ?

                        <div className='row'>
                            <div className='col-6 mt-4'>
                                <h5 className=" card-title">{weather.location ? weather.location.name : null}</h5>
                                {/* <h6 className="card-subtitle mb-2 sub-title">{weather.location ? weather.location.region + " ," + weather.location.country : null}</h6> */}
                                <p className="card-text mt-3">{weather.location ? weather.current.weather_descriptions[0] : null}</p>
                                {/* <a className="card-link">Card link</a>
                            <a className="card-link">Another link</a> */}
                            </div>
                            <div style={{ textAlign: "center" }} className='col-6'>
                                {/* <img src='https://raw.githubusercontent.com/goyal-aman/Images/master/weatber.jpg'></img> */}
                                <h1 className="temperature-box" ><span className='temperature' >{weather.current ? weather.current.temperature : null}</span><sup className='celsius-icon'>°</sup><span className='celsius' >C</span></h1>
                            </div>
                        </div>
                        :

                        <div onClick={() => { navigate('/weatherdetails') }} className='row'>
                            <div className='add-place'>
                                {weather.loading ?

                                    <BeatLoader color={"#EEEEEE"} loading={weather} size={17} />
                                    :
                                    <h2 className='add-place-icon'>+</h2>
                                }

                            </div>
                        </div>
                    }
                </div>
            </div>

            <MovieCard />
            <Cowin/>

        </div>
    )
}

export default Card