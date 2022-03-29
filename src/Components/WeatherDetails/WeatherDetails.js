import React from 'react'
import './WeatherDetails.css';
import EditIcon from '@mui/icons-material/Edit';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function WeatherDetails() {

  return (
    <div>
      <div className='row weather-details-container text-white header-box'>

        <div className='mt-4 col-3 '>
          <i className="material-icons nav__icon weatherpage-icon">tune</i>
        </div>
        <div className='mt-4 col-6 weatherdetails-header'>
          <p>Kannur</p>
        </div>
        <div className='mt-4 col-3'>
          <i className="ml-3 material-icons nav__icon weatherpage-icon">more_vert</i>
        </div>
      </div>
    </div>

  )
}

export default WeatherDetails