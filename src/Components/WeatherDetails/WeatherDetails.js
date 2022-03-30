import React from 'react'
import './WeatherDetails.css';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function WeatherDetails() {

  return (
    <div >
      <div className='container weather-details-container text-white header-box'>

        <div className='row'>
          <div className='mt-4 col-3 '>
            <i className="material-icons nav__icon weatherpage-icon">edit</i>
          </div>
          <div className='mt-4 col-6 weatherdetails-header'>
            <p style={{ fontSize: "20px" }} >Kannur</p>
          </div>
          <div className='mt-4 col-3'>
            <i className="ml-3 material-icons nav__icon weatherpage-icon">more_vert</i>
          </div>
        </div>

        <div className='row'>
          <h2 className='weather-container'>
            <span className='weather-text'>32</span>
            <span ><sup className='weather-format'>°c</sup></span>
          </h2>
        </div>

        <div className='row'>
          <p className='weather-description'>Cloudy</p>
        </div>
        <div className='row'>
          <p className='weather-time mt-3'>2022-03-30 08:41</p>
        </div>

        <section>
          <div className='row mt-4 p-3'>
            <div className='mt-5 weather-card-box'>
              <h1 className='weather-forecast'>Forecast</h1>
              <div className='row forecast-description mt-5'>
                <div className='col-4'>
                  <img style={{ borderRadius: '11px' }} className="mt-4" src='https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png'></img>
                </div>
                <div className='forecat-card col-8 p-3'>
                  <div className=''>
                    <div>
                      <i className="material-icons material-icons-cloud  nav__icon">filter_drama</i>
                    </div>
                    <div className='weather-forecast-description-box mt-4'>
                      <i className="ml-5 material-icons material-icons-arrow  nav__icon">east</i><span className='weather-speed'>6 km/h</span>
                      <span className='ml-5 material-icons-arrow weather-speed'>68° </span>
                      <span className='ml-5 material-icons-arrow weather-speed'>ENE </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='row mt-4 p-3'>
            <div className=' weather-card-box'>
              <h1 className='weather-forecast'>Forecast</h1>
              <div className='row forecast-description mt-5'>
                <div className='forecat-card col-12 p-3'>
                  <div className=''>
                    
                    <div className='ml-5 weather-forecast-description-box '>
                     <div >
                        <span className=' forecast-text weather-speed'>Humidity: 68° </span>
                        <span  className='left-margin-subtext forecast-text weather-speed'>Ecloudcover:18 </span>
                     </div>
                      <div >
                        <span className=' forecast-text weather-speed'>Cloudcover: 68° </span>
                        <span className='ml-5 forecast-text weather-speed'>Feelslike:18 </span>
                      </div>
                      <div >
                        <span className=' forecast-text weather-speed'>Uv_index: 68° </span>
                        <span className='left-margin-subtext forecast-text weather-speed'>Visibility:18 </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

  )
}

export default WeatherDetails