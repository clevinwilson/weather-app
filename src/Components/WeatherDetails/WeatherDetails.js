import React from 'react'
import './WeatherDetails.css';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function WeatherDetails() {

  return (
    <div >
      <div className='container weather-details-container text-white header-box'>

        <div className='row'>
          <div className='mt-5 col-3 '>
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
      </div>
    </div>

  )
}

export default WeatherDetails