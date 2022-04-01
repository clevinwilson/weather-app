import React, { useState, useEffect, useContext } from 'react'
import './WeatherDetails.css';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { useNavigate } from 'react-router-dom';
import { WEATHER_API_KEY } from '../constants/constants'
import { FirebaseContext } from '../../store/Context'
import axios from 'axios';
import MoonLoader from "react-spinners/PuffLoader";


function WeatherDetails() {
  const [weather, setWeather] = useState({});
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
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
      //   console.log(response.data);
      //     setWeather(response.data)
      // })
    })
  }, [])

  return (
    <div className={weather.location ? null : "loading"} >
      {weather.location ?

        <div className='container weather-details-container text-white header-box'>

          <div className='row'>
            <div className='mt-4 col-3 '>
              <i onClick={() => { navigate('/addplace') }} className="material-icons nav__icon weatherpage-icon">edit</i>
            </div>
            <div className='mt-4 col-6 weatherdetails-header'>
              <p style={{ fontSize: "20px" }} >{weather.location ? weather.location.name : null}</p>
            </div>
            <div className='mt-4 col-3'>
              <i className="ml-3 material-icons nav__icon weatherpage-icon">more_vert</i>
            </div>
          </div>

          <div className='row'>
            <h2 className='weather-container'>
              <span className='weather-text'>{weather.current ? weather.current.temperature : null}</span>
              <span ><sup className='weather-format'>°c</sup></span>
            </h2>
          </div>

          <div className='row'>
            <p className='weather-description'>{weather.location ? weather.current.weather_descriptions[0] : null}</p>
          </div>
          <div className='row'>
            <p className='weather-time mt-3'>{weather.location ? weather.location.localtime : null}</p>
          </div>

          <section>
            <div className='row mt-4 p-3'>
              <div className='mt-5 weather-card-box'>
                <h1 className='weather-forecast'>Forecast</h1>
                <div className='row forecast-description mt-5'>
                  <div className='col-4'>
                    <img style={{ borderRadius: '11px' }} className="mt-4" src={weather.current ? weather.current.weather_icons[0] : null}></img>
                  </div>
                  <div className='forecat-card col-8 p-3'>
                    <div className=''>
                      <div>
                        <i className="material-icons material-icons-cloud  nav__icon">filter_drama</i>
                      </div>
                      <div className='weather-forecast-description-box mt-4'>
                        <i className="ml-5 material-icons material-icons-arrow  nav__icon">east</i><span className='weather-speed'>{weather.current ? weather.current.wind_speed : null} km/h</span>
                        <span className='ml-5 material-icons-arrow weather-speed'>{weather.current ? weather.current.wind_degree : null}° </span>
                        <span className='ml-5 material-icons-arrow weather-speed'>{weather.current ? weather.current.wind_dir : null} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section >
            <div className='row mb-5  mt-4 p-3'>
              <div className='mb-5 weather-card-box'>
                <h1 className='weather-forecast'>More Forecast</h1>
                <div className='row forecast-description mt-5'>
                  <div className='forecat-card col-12 p-3'>
                    <div className=''>

                      <div className='row m-1 weather-forecast-description-box '>

                        <div className='col-6'>
                          <p className=' forecast-text weather-speed'>Humidity: {weather.current ? weather.current.humidity : null}% </p>
                          <p className=' forecast-text weather-speed'>Visibility: {weather.current ? weather.current.visibility : null}</p>
                          <p className=' forecast-text weather-speed'>UV index: {weather.current ? weather.current.uv_index : null} </p>
                        </div>
                        <div className='col-6'>
                          <p className=' forecast-text weather-speed'>Cloud cover: {weather.current ? weather.current.cloudcover : null} </p>
                          <p className=' forecast-text weather-speed'>Pressure: {weather.current ? weather.current.pressure : null}</p>
                          <p className=' forecast-text weather-speed'>Feelslike: {weather.current ? weather.current.feelslike : null} </p>
                        </div>
                        {/* <div >
                        <span className=' forecast-text weather-speed'>Humidity: 68% </span>
                        <span  className='left-margin-subtext forecast-text weather-speed'>Cloud cover:18 </span>
                     </div>
                      <div >
                        <span className=' forecast-text weather-speed'>Visibility: 68</span>
                        <span style={{ marginLeft:'48px'}} className=' forecast-text weather-speed'>Pressure: 1010mbar </span>
                      </div>
                      <div >
                        <span className=' forecast-text weather-speed'>UV index: 11 </span>
                        <span className='left-margin-subtext forecast-text weather-speed'>Feelslike: 18 </span>
                      </div> */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        :
        <MoonLoader color={"#007bff"} loading={weather} size={60} />

      }
    </div>

  )
}

export default WeatherDetails