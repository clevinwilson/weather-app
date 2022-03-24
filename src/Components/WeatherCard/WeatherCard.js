import React, { useEffect, useState } from 'react';
import './WeatherCard.css'
import axios  from 'axios';
import {useNavigate} from 'react-router-dom';
import {WEATHER_API_KEY} from '../constants/constants'

function Card() {
    
    const [weather, setWeather]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        // axios.get(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=Kannur`).then((response)=>{
        //     setWeather(response.data)
        // })
    },[])
    return (
        <div className='box-padding'>
            {/* <h2 className='section-title'>Weather</h2> */}
            <div onClick={() => { navigate('/addplace') }} className=" mb-4 card col-md-12" >
                <div  className="card-body ">
                    {weather.location ? <div className='row'>
                        <div  className='col-6 mt-3'>
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

                        <div onClick={() => { navigate('/addplace') }}  className='row'>
                            <div className='add-place'>
                                <h2 className='add-place-icon'>+</h2>
                            </div>
                        </div>
                    }
                </div>
            </div>

           
        </div>
    )
}

export default Card