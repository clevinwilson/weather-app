import React,{useContext, useEffect, useState} from 'react'
import './WelcomeCard.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {FirebaseContext} from '../../store/Context'
function WelcomeCard() {
  const {firebase}=useContext(FirebaseContext);
  const [location,setLocation]=useState('');
  useEffect(()=>{
    firebase.firestore().collection('location').get().then((snapshort)=>{
      const location = snapshort.docs.map((location) => {
        return (
          {
            ...location.data(),
            id: location.id
          }
        )

      })
     setLocation(location[0]);
    })
  },[])
  return (
    <div className='box-padding welcome-container'>
      <div className='welcome-box mt-5'>
       
        <div className='ml-3' >
          <p className='title-message'>Hi, Clevin</p>
          <p className=' title-subtext'>Good morning</p>
        </div>
        <div onClick={() => { }} className=" location-card  mt-5  col-12 col-md-4" >
          <div className="card-body ">
            <div className='row'>
              <div  className='col-3 text-center mt-2'>
                <LocationOnIcon fontSize="large"/>
              </div>
              <div style={{position:'inherit'}} className='col-9'>
                <h5  style={{position:"inherit"}} className=" location-card-title card-title">{location ? location.city:null}</h5>
                
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard