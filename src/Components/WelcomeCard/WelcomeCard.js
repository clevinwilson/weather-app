import React from 'react'
import './WelcomeCard.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
function WelcomeCard() {
  return (
    <div className='box-padding'>
      <div className='welcome-box'>
        <p className='title-message'>Good morning,</p>
        <p className='title-subtext'>Clevin</p>
        <div onClick={() => { }} className=" location-card  mt-5  col-12" >
          <div className="card-body ">
            <div className='row'>
              <div  className='col-3 text-center mt-2'>
                <LocationOnIcon fontSize="large"/>
              </div>
              <div className='col-9'>
                <h5 className=" location-card-title card-title">India,Kerala,Kannur</h5>
                
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard